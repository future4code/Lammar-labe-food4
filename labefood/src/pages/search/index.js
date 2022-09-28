import React, { useState } from "react";
import CardRestaurant from "../../components/CardRestaurant";
import { BASE_URL } from "../../constants/constants";
import { useGetRest } from "../../hooks/useGetRest";
import {
  Flex,
  Input,
  Text,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

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

  return (
    <Flex align="center" flexDir="column">
      <IoIosArrowBack
        style={{ position: "absolute", top: "1rem", left: "1rem" }}
        cursor="pointer"
        onClick={() => window.history.back()}
      />
      <Flex
        w="100%"
        align="center"
        borderBottom="1px solid #b8b8b8"
        justify="center"
        p="3"
        marginBottom="10px"
      >
        <Text
          w="2.688rem"
          h="1.188rem"
          fontFamily="Roboto"
          fontSize="1rem"
          letterSpacing="-0.39px"
          textAlign="center"
          color="#000"
        >
          Busca
        </Text>
      </Flex>
      <Flex
        as="label"
        w="20.5rem"
        h="3.5rem"
        p="1rem 0.503rem 1rem 1.063rem"
        border="solid 1px #b8b8b8"
        borderRadius="2px"
      >
        <Icon
          as={RiSearchLine}
          w="1.5rem"
          h="1.5rem"
          margin="0 0.959rem 0 0"
          objectFit="contain"
          color="#b8b8b8"
        />
        <Input
          variant="unstyled"
          placeholder="Restaurante"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </Flex>
      <UnorderedList
        w="100%"
        h="3.5rem"
        p="1rem 0.503rem 1rem 1.063rem"
        borderRadius="2px"
        overflow="auto"
        display="flex"
        alignItems="center"
        cursor="pointer"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {restaurantes.map((i) => (
          <ListItem
            listStyleType="none"
            margin="0 5px"
            fontSize="16px"
            _active={{
              color: "#e86e5a",
            }}
            key={i.id}
            onClick={() => setCategoria(i.category)}
            style={{
              color: categoria === i.category ? "red" : "black",
            }}
          >
            {i.category}
          </ListItem>
        ))}
      </UnorderedList>
      <Flex
        align="center"
        w="100%"
        flexWrap="wrap"
        justify="center"
        gap="30px"
        flexDir="row"
      >
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
      </Flex>
    </Flex>
  );
};
