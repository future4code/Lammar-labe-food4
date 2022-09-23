import React from "react"
import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo.png'
import { goToLoginPage } from "../../routes/coordinator"
import { ImgLogo } from "./styled"

export const HomePage = () =>{
    const navigate = useNavigate()
    return (
       
        <ImgLogo>
        {setTimeout(()=>{
            goToLoginPage(navigate)
        }, 3000)}
           <img src={logo} alt="logo do rappi4"/>
        </ImgLogo>

    )
}