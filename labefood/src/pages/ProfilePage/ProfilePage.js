import {Footer} from "../../components/footer/Footer";
import {Header} from "../../components/header/Header";

import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Container } from "./Styled";

export const ProfilePage = () => {

  useProtectedPage()
  
  return (
    <Container>
      <Header subTitle={"Meu perfil"} />
      
      <Footer current={'Profile'}/>
    </Container>
  );
};

