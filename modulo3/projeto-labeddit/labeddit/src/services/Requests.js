import { BASE_URL } from '../constants/Urls'
import axios from 'axios'

export const login = (body, clear, navigate, setTextoCerto) => {
 
    axios.post(`${BASE_URL}/users/login`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        navigate("/feed")
        setTextoCerto("logout")
      })
      .catch((err) => {
        alert(`Erro ao fazer login! ${err.response.data}`)
        
      })
};

 export const Cadastrar =(body,clear, navigate,setTextoCerto)=>{
    axios.post(`${BASE_URL}/users/signup`, body, )
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        navigate("/feed")
        setTextoCerto("logout")
      })
      .catch((err) => {
        alert(`Erro ao fazer cadastro! ${err.response.data}`)
        
      })
};

export const criarPost =(body, clear)=>{
  axios.post(`${BASE_URL}/posts`, body, {
    headers: {
            Authorization: localStorage.getItem('token')
        }
    })
  .then((res)=>{
    alert("Post criado com Sucesso!!")
    localStorage.setItem('token', res.data.token)
    clear()
   

  }).catch((err)=>{
    alert(`Erro ao criar Post! ${err.response.data}`)
  })
};

export const votacao =(id,direction,obterPostagem)=>{

  axios.post (`${BASE_URL}/posts/${id}/votes`,{direction:direction}, {
    headers: {
      Authorization:localStorage.getItem('token')
    }
  })
  .then((res)=>{
    
    if(direction=== 1)
    alert("Voto positivo")
    else{alert("Voto negativo")}
    obterPostagem()

  }).catch((err)=>{
    alert(`Nao deu certo ${err.data.message}`)
  })
}

export const deletar =(id,obterPostagem)=>{

   axios.delete (`${BASE_URL}/posts/${id}/votes`,{
    headers: {
      Authorization:localStorage.getItem('token')
    }})
    .then((res)=>{
      alert("Voto deletado")
      obterPostagem()
    })
    .catch((err)=>{
      alert("deu erro")
    })
}