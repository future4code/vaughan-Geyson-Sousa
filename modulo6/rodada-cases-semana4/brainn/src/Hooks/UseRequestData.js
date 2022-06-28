import { useEffect, useState } from 'react'
import axios from 'axios'

const UseRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)
    const [carregando, setCarregando] = useState(false)
    useEffect(() => {
        setCarregando(true)

            axios.get(url)
                .then((response) => {
                    setCarregando(false)
                    setData(response.data)
                })
                .catch((error) => {
                   
                })
        
    }, [url]);

    return [data, setData, carregando]
}
export default UseRequestData


