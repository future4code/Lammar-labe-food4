import React, { useState } from "react";
import logo from "../../images/back.png";
import CardRestaurant from "../../components/CardRestaurant";
import {
  SearchHeader,
  SearchWrapper,
  SearchInput,
  SearchInputDiv,
  Categorias,
} from "./styled";
import { BASE_URL } from "../../constants/constants";
import { useGetRest } from "../../hooks/useGetRest";

export const Search = () => {
  const [restaurantes] = useGetRest(`${BASE_URL}/restaurants`);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");

  const filtroCategoria = restaurantes.filter((i) =>
    i.category.toLowerCase().includes(categoria.toLowerCase())
  );

  const filtro = filtroCategoria.filter((i) =>
    i.name.toLowerCase().includes(busca.toLowerCase())
  );

  // const tiposCategorias = restaurantes.map((i) => (
  //   <li key={i.id} onClick={() => setCategoria(i.category)}>
  //     {i.category}
  //   </li>
  // ));

  return (
    <SearchWrapper>
      <SearchHeader>
        <img onClick={() => window.history.back()} src={logo} alt="back" />
        <p>Buscar</p>
      </SearchHeader>

      <SearchInputDiv>
        <SearchInput
          placeholder="Buscar Restaurante"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <Categorias>
          {restaurantes.map((i) => (
            <li key={i.id} 
            onClick={() => setCategoria(i.category)}
            style={{
              color: categoria === i.category ? "red" : "black",
            }}>
              {i.category}
            </li>
          ))}
          </Categorias>

        {filtro.map((item) => {
          return (
            <CardRestaurant
              key={item.id}
              id={item.id}
              logoUrl={item.logoUrl}
              name={item.name}
              shipping={item.shipping}
              deliveryTime={item.deliveryTime}
            />
          );
        })}

        {filtro.length === 0 ? <p>Não encontramos :(</p> : null}
      </SearchInputDiv>
    </SearchWrapper>
  );
};
