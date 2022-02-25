import React from 'react';
import { Logo, DivTela, DivInputs, DivFormulario } from './style'
import LogoRobo from '../../assets/robo3.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { Cadastrar } from '../../services/Requests';
import useUnProtectedPage from '../../hooks/useUnprotectPage';


function Cadastro() {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })
    useUnProtectedPage()

  const onSubmit = (ev) => {
    ev.preventDefault()
    Cadastrar(form, clear, navigate)
  }

  return (

    <DivTela>
      <h1> Cadastro </h1>
      <Logo src={LogoRobo} alt="background imagem" />
      <DivInputs>

        <DivFormulario onSubmit={onSubmit}>

          <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            type={"text"}
            required
          />
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
          <Button /*onClick={()=>irParaLogin(navigate)}*/
            fullWidth
            variant={'contained'}
            color={"secondary"}
            type={'submit'}
            required
          >
            Cadastrar
          </Button>

        </DivFormulario>
      </DivInputs>
    </DivTela>

  );
}
export default Cadastro;