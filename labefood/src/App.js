import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import {Router} from "./routes/Router"
import {Theme} from './styles/Theme'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from './styles/theme'



function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Router/>
    </ChakraProvider >
    <ChakraProvider theme={theme}>
      <Router/>
    </ChakraProvider>
  );
}

export default App;
