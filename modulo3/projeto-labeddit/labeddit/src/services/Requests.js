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

// export const votacao =(body)=>{
//   axios.post (`${BASE_URL}/posts/:id/votes`,body, {
//     headers: {
//       Authorization:localStorage.getItem('token')
//     }
//   })
//   .then((res)=>{
//     alert('voce deu like')
//     getData()

//   }).catch((err)=>{
//     alert("Nao deu certo")
//   })

// }