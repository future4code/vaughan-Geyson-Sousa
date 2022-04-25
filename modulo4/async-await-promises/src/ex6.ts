import axios from 'axios'
import { baseURL } from './baseURL'

// A) faz com que envie as promisses em um array sem necessidade de uma requisição 
// B) Quando usa o Promise.all você não precisa esperar pela resposta de uma requisição para prosseguir.
// C)

export const notifySubscribersPromiseAll = async (subscriberIds: string[]): Promise<void> => {
    try {
        const requests = subscriberIds.map((subscriberId: string) => {
            return axios.post(`${baseURL}/notifications`, {
                subscriberId,
                message: "Novas notícias!"
            })
        })
        await Promise.all(requests)
        console.log("Notificações enviadas!")
    }
    catch (err: any) {
        console.log(err.response?.data || err.message)
    }
} 