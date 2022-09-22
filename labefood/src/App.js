import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import {Router} from "./routes/Router"
import {Theme} from './styles/Theme'


function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Router/>
    </ChakraProvider >
  );
}

export default App;
