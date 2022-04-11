import axios from "axios";


type User = {
    id: string;
    name: string;
    email: string
};


const notification = async (users: User[], message: string): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`https://labenews.herokuapp.com/notifications`, {
                userId: user.id,
                message
            })
        }
        console.log("Mensagens enviadas")

    } catch (error: any) {
        console.log(error.response)
    }
};