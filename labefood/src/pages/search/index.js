import React from "react";
import logo from "../../images/back.png";
import { Card } from "./Card";
import { SearchHeader, SearchWrapper, SearchInput, SearchInputText } from "./styled";
import { BASE_URL } from "../../constants/constants";
import { useGetRest } from "../../hooks/useGetRest";

export const Search = () => {
  const [infoRestaurant, setInfoRestaurant] = useGetRest(`${BASE_URL}/restaurants`);

  console.log(infoRestaurant);

  return (
    <SearchWrapper>
      <SearchHeader>
        <img src={logo} alt="back" />
        <p>Busca</p>
      </SearchHeader>
      <div>
        <SearchInput type="text" placeholder="Restaurante"

        img={logo} alt="search" />
      </div>

      {/* <SearchInputText>Não encontramos :( </SearchInputText> */}
      <Card/>
      <Card/>
      <Card/>
    </SearchWrapper>
  );
};