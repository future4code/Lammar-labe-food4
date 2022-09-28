import styled from "styled-components";


export const LoginPageContainer = styled.div`
 width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
  text-align: left;
  
  h1:nth-child(1) {
    color: #E86E5A;
    font-weight: 400;
    align-items: center;
  }
  p{
    margin-top: 2vh;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
 
`
export const Input = styled.input`
 width: 20.5rem;
  height: 3.5rem;
  margin: 0.5rem 0 0;
  padding: 1.188rem 3rem 1.188rem 1rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;

`
export const Button = styled.div`
  
  width: 18.5rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000;;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 20.5rem;
  height: 2.625rem;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  background-color: #E86E5A;
  `

export const ImgIfuture = styled.img`
display: flex;
margin: 10px 150px 10px;

`

export const HeaderBack = styled.div`
 width: 100%;
  border-bottom: 1px solid #B8B8B8;
  margin: -5vh 0 -1vh 0;
`