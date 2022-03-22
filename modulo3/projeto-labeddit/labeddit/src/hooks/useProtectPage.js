import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { irParaLogin } from "../routes/Cordenadas"

const useProtectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token){
            irParaLogin(navigate)
        }
    }, [navigate])
}
export default useProtectedPage;