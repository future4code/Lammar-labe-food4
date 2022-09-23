import React from "react";
import {Router} from "./routes/Router"
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from './styles/theme'



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router/>
    </ChakraProvider>
  );
}

export default App;
