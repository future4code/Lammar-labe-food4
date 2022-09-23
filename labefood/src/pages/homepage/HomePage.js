import React from "react"
import { goToLoginPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { Container } from "./styled"
export const HomePage = () =>{
    const navigate = useNavigate()
    return (
        <Container>
            <h1>Rappi4</h1>
      {setTimeout(() => {
        goToLoginPage(navigate)
      }, 2000)}
            </Container>
    )
}