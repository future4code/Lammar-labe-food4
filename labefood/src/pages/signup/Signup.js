import React from "react"
import {LoginPageContainer, FormContainer, Input, Button, ButtonContainer, ImgIfuture, HeaderBack} from './styled'
import {useForm} from '../../hooks/useForm'
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/constants"
import rappi4 from "../../assets/rappi4.png";
import {goToAddressRegistration, goToLoginPage} from "../../routes/coordinator"
import Return from "../../assets/back.svg"
import axios from "axios"
export const Signup = () =>{
  
    const [ form, onChange, clearFields] =useForm({
      name: "",
      email: "",
      cpf: "",
      password: "",
      rep_password: "",
    });
    const navigate = useNavigate()
  const ClickAlertPassword = () =>{
    alert("As senhas digitadas não conferem.")
  }
  const ClickReturn = () => {
    goToLoginPage(navigate)
  }
  const SubmitSignUp=() =>{
    const url = `${BASE_URL}/signup`
    const body = {
      "name": form.name,
      "email": form.email,
      "cpf": form.cpf,
      "password": form.password,
    };

    axios
    .post(url, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
     
      alert("Cadastro realizado com sucesso.")
      goToAddressRegistration(navigate);

    })
    .catch((err) => {
      alert("Erro ao cadastrar usuário.")
     
    })

  }

  const submit = (event) => {
    event.preventDefault();
    clearFields();
  }

    return (
        <LoginPageContainer>
           <ImgIfuture src={rappi4} alt="logo do ifuture" />
          <HeaderBack>
          <img onClick={ClickReturn} src={Return} alt="back"></img>
          </HeaderBack>
      <p>Cadastrar</p>
      <form onSubmit={submit} >
          <FormContainer>
      <Input name={"name"}
            value={form.name}
            onChange={onChange}
            placeholder="Nome e Sobrenome"
            type="text"
            fullWidth
            id="outlined-required"
            label="Nome"
            required/> 

     <Input name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder="email@email.com"
            type="email"
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="E-mail"
            required/>
    <Input   name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            placeholder="000.000.000-00"
            type="number"
            fullWidth
            id="outlined-required"
            label="CPF"
            required
            pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"/>

    <Input   name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder="Mínimo 6 caracteres."
            type="password"
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Senha"
            required
            pattern="^.{6,10}$"/>

     <Input  name={"rep_password"}
            value={form.rep_password}
            onChange={onChange}
            placeholder="Confirme a senha anterior."
            type="password"
            fullWidth
            id="outlined-required"
            label="Confirmar"
            required/>            
      
      <ButtonContainer>
      {form.rep_password === form.password ?
          (<Button
            onClick={SubmitSignUp}
            fullWidth
            
          >
            Criar
          </Button>) : 
           (<Button
              onClick={ClickAlertPassword}
              fullWidth
              
            >
              Criar
            </Button>) }
        </ButtonContainer>
        </FormContainer>
        </form>
      </LoginPageContainer>
    )}