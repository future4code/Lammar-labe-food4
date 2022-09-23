import React, { useState } from "react"
import { useForm } from "../../hooks/useForm"
import { LoginPageContainer, FormContainer, ImgIfuture } from "./styled"
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    InputGroup,
    InputRightElement,
    IconButton,
    Button
} from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import rappi4 from '../../assets/rappi4.png'
import { useNavigate } from "react-router-dom"
import {goToSignup, goToFeed} from '../../routes/coordinator'
import { Login } from "../../constants/constants"

export const LoginPage = () => {
    const navigate = useNavigate()

    const [form, onChangeInputs] = useForm({
        email: "",
        password: ""
    })
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        setIsEmailValid(/[a-zA-Z0-0]+@[a-z]{3}[.a-z]?/.test(form.email));
        setIsPasswordValid(/.{6,}/.test(form.password));
        try{
            const {token} = isEmailValid && isPasswordValid && await Login({
                email: form.email,
                password: form.password
            });
            localStorage.setItem("rappi4.token", token)
            goToFeed(navigate)
        } catch (e) {
            console.log(e)
        }
    }
    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <LoginPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit} >
                    <ImgIfuture src={rappi4} alt="logo do ifuture" />
                    <FormControl isInvalid={!isEmailValid}>
                        <FormLabel>E-mail*</FormLabel>
                        <Input
                            name='email'
                            // type='email'
                            value={form.email}
                            onChange={onChangeInputs}
                            placeholder="email@email.com"
                        />
                        {!isEmailValid ? (
                            <FormErrorMessage as="p">
                                E-mail inválido.
                            </FormErrorMessage>
                        ) : undefined}
                    </FormControl>
                    <FormControl isInvalid={!isPasswordValid}>
                        <FormLabel>Senha*</FormLabel>

                        <InputGroup size='md'>
                            <Input
                                name="password"
                                value={form.password}
                                onChange={onChangeInputs}
                                pr='4.5rem'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Mínimo 6 caracteres'
                            />
                            <InputRightElement width='4.5rem'>
                                <IconButton h='1.75rem' size='sm' onClick={onClickShowPassword}>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </IconButton>
                            </InputRightElement>
                        </InputGroup>
                        {!isPasswordValid ? (
                            <FormErrorMessage as="p">
                                Mínimo 6 caracteres
                            </FormErrorMessage>
                        ) : undefined}
                    </FormControl>

                    <Button type="submit" variant="form-main">Entrar</Button>
                    <Button onClick={()=> goToSignup(navigate)} type="button" variant="form-secondary">Não possui cadastro? Clique aqui.</Button>
                </form>

            </FormContainer>
        </LoginPageContainer>
    )
}