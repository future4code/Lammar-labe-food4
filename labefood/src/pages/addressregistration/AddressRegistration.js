import React from "react"
import {LoginPageContainer, FormContainer, Input, Button, ButtonContainer, HeaderBack, ImgIfuture} from './styled'
import {useForm} from '../../hooks/useForm'
// import {Header} from '../../components/header/Header'
import rappi4 from "../../assets/rappi4.png";
import Return from "../../assets/back.svg"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/constants"
import {goToFeed, goToSignup} from "../../routes/coordinator"
import axios from "axios"

export const AddressRegistration = () =>{
    const [ form, onChange, cleanFields] =useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
      });
      const navigate = useNavigate()
      const ClickReturn = () => {
        goToSignup(navigate)
      }
   
    const SubmitAddAdress=() =>{
      const url = `${BASE_URL}/address`
      const body = {
        street: form.street,
        number: form.number,
        neighbourhood: form.neighbourhood,
        city: form.city,
        state: form.state,
        complement: form.complement
      };
      const headers = {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
      axios
      .put(url, body, headers)
      .then((res) => {
          alert("Cadastro realizado com sucesso.")
          goToFeed(navigate);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert("Erro ao cadastrar usuário.")
        console.log(err.message)
      })
  
    }
  
    const submit = (event) => {
      event.preventDefault();
      cleanFields();
    }
  
      return (
          <LoginPageContainer>
            <ImgIfuture src={rappi4} alt="logo do ifuture" />
            <HeaderBack>
              
            <img onClick={ClickReturn} src={Return} alt="back"></img>
            </HeaderBack>
        <p>Meu endereço</p>
        <form onSubmit={submit} >
            <FormContainer>
        <Input name={"street"}
            value={form.street}
            onChange={onChange}
            fullWidth
            margin={"none"}
            id="outlined-required"
            label="Logradouro"
            required/> 
  
       <Input name={"number"}
            value={form.number}
            onChange={onChange}
            type="number"
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Número"
            required/>

      <Input  name={"complement"}
            value={form.complement}
            onChange={onChange}
            fullWidth
            margin={"none"}
            id="outlined"
            label="Complemento"/>
  
      <Input name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            fullWidth
            margin={"dense"}
            id="outlined-required"
            label="Bairro"
            required/>
  
       <Input  name={"city"}
            value={form.city}
            onChange={onChange}
            fullWidth
            margin={"dense"}
            id="outlined-required"
            label="Cidade"
            required/>  

     <Input  name={"state"}
            value={form.state}
            onChange={onChange}
            fullWidth
            margin={"dense"}
            id="outlined-required"
            label="Estado"
            required/>           
        
        <ButtonContainer>
        <Button
          onClick={SubmitAddAdress}
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
        >
          Salvar
        </Button>
          </ButtonContainer>
          </FormContainer>
          </form>
        </LoginPageContainer>
      )}