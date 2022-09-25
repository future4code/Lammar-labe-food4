import React from "react";
import {Router} from "./routes/Router"
import {ChakraProvider} from '@chakra-ui/react'
import {Theme} from './styles/theme'

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Router/>
    </ChakraProvider>
  );
}

export default App;
