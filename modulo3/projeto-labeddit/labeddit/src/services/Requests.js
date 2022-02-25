import { BASE_URL } from '../constants/Urls'
import axios from 'axios'

export const login = (body, clear, navigate) => {
 


    axios.post(`${BASE_URL}/users/login`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        navigate("/feed")
      })
      .catch((err) => {
        alert(`Erro ao fazer login! ${err.response.data}`)
        
      })
};

 export const Cadastrar =(body,clear, navigate)=>{
    axios.post(`${BASE_URL}/users/signup`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        navigate("/feed")
        
      })
      .catch((err) => {
        alert(`Erro ao fazer cadastro! ${err.response.data}`)
        
      })


};