
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { useRequestData } from "../../../hooks/useRequestData";
import { goToProfile } from "../../../routes/coordinator";
import {Header} from "../../header/header"
import { ButtonContainer, ContainerEdit, InputsContainer, Button, Input } from "../Styled";
import Back from "../../../assets/back.svg";
import api from "../../../config/api";

const EditProfile = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const { data } = useRequestData(`/profile`, {});
  const [ form, onChange, setForm ] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  useEffect(() => {
    const { user } = data;
    console.log(user);
    setForm({
      name: user?.name,
      email: user?.email,
      cpf: user?.cpf,
    });
  }, [data]);

  const Edit = () => {
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
    };
    api
      .put("/profile", body)
      .then((res) => {
        setForm(res.data.user);
        goToProfile(navigate);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <ContainerEdit>
      <Header subTitle={"Editar Perfil"} />
      <img src={Back} alt="voltar" onClick={() => goToProfile(navigate)}></img>
      <form onSubmit={submit}>
        <InputsContainer>
          <Input
            name={"name"}
            value={form.name || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Nome"
            required
          />
          <Input
            name={"email"}
            value={form.email || ""}
            onChange={onChange}
            fullWidth
            type="email"
            margin={"normal"}
            id="outlined-required"
            label="E-mail"
            required
          />
          <Input
            name={"cpf"}
            value={form.cpf || ""}
            onChange={onChange}
            type="number"
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Cpf"
            required
          />
        </InputsContainer>
        <ButtonContainer>
          <Button onClick={Edit} fullWidth variant="contained" color="primary">
            Salvar
          </Button>
        </ButtonContainer>
      </form>
    </ContainerEdit>
  );
};

export default EditProfile;
