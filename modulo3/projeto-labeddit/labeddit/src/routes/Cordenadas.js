import { useNavigate } from "react-router-dom";

navigate = useNavigate() 

export const irParaFeed= ()=>{
    navigate("/")
}

export const irParaLogin= ()=>{
    navigate("/login")
}

export const irParaPost =()=>{
    navigate(`/post/${id}`)
}

export const irParaCadastro =()=>{
    navigate("/cadastro")
}