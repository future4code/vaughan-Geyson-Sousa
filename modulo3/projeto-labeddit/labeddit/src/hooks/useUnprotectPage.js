import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { irParaFeed } from "../routes/Cordenadas"

const useUnProtectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            irParaFeed(navigate)
        }
    }, [navigate])
}
export default useUnProtectedPage;