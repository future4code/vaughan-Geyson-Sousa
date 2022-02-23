import React from 'react';
import axios from 'axios'
import { Logo, DivTela, DivInputs, divBotao, DivFormulario} from './style'
import LogoRobo from '../../assets/robo3.png'
import  Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { irParaCadastro } from '../../routes/Cordenadas';
import { BASE_URL } from '../../constants/Urls'

function Login() {
  const  navigate = useNavigate()
  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmit = (ev) => {
    ev.preventDefault()

    login()
  }
  const login =()=>{
    const body ={
      email: form.email,                                          
      password: form.password,
    }
    axios.post(`${BASE_URL}/users/login`, body )
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }

  return (

    <DivTela>
      <Logo src={LogoRobo} alt="background imagem" />
      <DivInputs>
      
        <DivFormulario onSubmit={onSubmit}>

          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth     
            type={"email"}
            required
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth   
            type={"password"}
            required
            inputProps={{ pattern: '^.{8,30}', title: " É necessario que a senha possua no mínimo 8 caracteres e no máximo 30!" }}
          />
          <Button 
          fullWidth 
          variant={'contained'} 
          color={"secondary"}
          type={'submit'}
          required
          >
            Entrar
          </Button>

          </DivFormulario>

          <divBotao>
          <Button onClick={()=>irParaCadastro(navigate)}
          fullWidth 
           variant={'text'}
           color={"primary"}
           type={'submit'}
           required
           >
             Deseja criar uma conta? Cadastre-se
          </Button>
          </divBotao>
      </DivInputs>
    </DivTela>

  );
}

export default Login;