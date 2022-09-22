import { useNavigate } from "react-router-dom"
import { Container } from "./Styles"
import { goToLoginPage } from "../../router/coordinator"

export const Header = ({ subTitle }) => {

  const navigate = useNavigate()

  const Logout = () => {
    localStorage.clear()
    goToLoginPage(navigate)
  }

  return (
    <Container>
      <h2>{subTitle}</h2>
      <p onClick={Logout}>Logout</p>
    </Container>
  )
}


