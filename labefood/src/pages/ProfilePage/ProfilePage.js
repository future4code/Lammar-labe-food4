import {Footer} from "../../components/footer/Footer";
import {Header} from "../../components/header/Header";
import CardProfile from "../../components/ProfileCards/CardProfile";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Container } from "./Styled";

export const ProfilePage = () => {

  useProtectedPage()
  
  return (
    <Container>
      <Header subTitle={"Meu perfil"} />
      <CardProfile />
      <Footer current={'Profile'}/>
    </Container>
  );
};

