
import { useForm } from "../../../hooks/useForm";
import api from "../../../config/api";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { useEffect } from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { goToProfile } from "../../../routes/coordinator";
import { ButtonContainer, ContainerEdit, InputsContainer, Button, Input } from "../Styled";
import {Header} from "../../header/header"
import Back from "../../../assets/back.svg";

const EditAddress = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const {  data } = useRequestData(`/profile/address`, {});
  const [ form, onChange, setForm ] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  useEffect(() => {
    const {address } = data;
    setForm({
      street: address?.street,
      number: address?.number,
      neighbourhood: address?.neighbourhood,
      city: address?.city,
      state: address?.state,
      complement: address?.complement,
    });
  }, [data]);

  const Edit = () => {
    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };
    api
      .put("/address", body)
      .then((res) => {
        setForm(res.data.user);
        goToProfile(navigate);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <ContainerEdit>
      <Header subTitle={"Endereço"} />
      <img src={Back} alt="voltar" onClick={() => goToProfile(navigate)}></img>
      <form onSubmit={submit}>
        <InputsContainer>
          <Input
            name={"street"}
            value={form.street || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Logradouro"
            required
          />
          <Input
            name={"number"}
            value={form.number || ""}
            onChange={onChange}
            type="number"
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Número"
            required
          />
          <Input
            name={"complement"}
            value={form.complement || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined"
            label="Complemento"
          />
          <Input
            name={"neighbourhood"}
            value={form.neighbourhood || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Bairro"
            required
          />
          <Input
            name={"city"}
            value={form.city || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Cidade"
            required
          />
          <Input
            name={"state"}
            value={form.state || ""}
            onChange={onChange}
            fullWidth
            margin={"normal"}
            id="outlined-required"
            label="Estado"
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

export default EditAddress;
