import React, { useState } from "react";
import logo from "../../images/back.png";
import CardRestaurant from "../../components/CardRestaurant";
import { SearchHeader, SearchWrapper, SearchInput, SearchInputDiv, Categorias } from "./styled";
import { BASE_URL } from "../../constants/constants";
import { useGetRest } from "../../hooks/useGetRest";

export const Search = () => {
  const [restaurantes] = useGetRest(`${BASE_URL}/restaurants`);
  const [busca, setBusca] = useState('');
  
  const filtro = restaurantes.filter((i) =>
    i.name.toLowerCase().includes(busca.toLowerCase()),
  );

const cards = () => {
  if (filtro.length > 0) {
    return filtro.map((item) => {
      return (
        <CardRestaurant
          key={item.id}
          name={item.name}
          logoUrl={item.logoUrl}
          deliveryTime={item.deliveryTime}
          shipping={item.shipping}
        />
      );
    });
  } else {
    return <p>Não encontramos :(</p>;
  }
};

  return (
    <SearchWrapper>
      <SearchHeader>
        <img 
        onClick={() => window.history.back()}
        src={logo} alt="back" />
        <p>Buscar</p>
      </SearchHeader>
      <SearchInputDiv>
        <SearchInput placeholder="Buscar Restaurante"
        value={busca}
        onChange={(e) => setBusca(e.target.value)} />
        <Categorias>
        {restaurantes.map((info) => (
          <li>{info.category}</li>
        ))}
      </Categorias>
      </SearchInputDiv>
      {cards()}
    </SearchWrapper>
  );
};
