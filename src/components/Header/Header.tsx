import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import './Headers.css'
import Login from "../Login/Login";
const clearLocalStorage = () => {
  localStorage.clear();
  alert('LocalStorage borrado!');
};

export const Header = () => {
  return (
    <Box bg="white" color="black" px={4} py={2}>
      <Flex alignItems="center">
        <a href="/"><img style={{ width: '200px' }} src="logoheader.png" alt="" /></a>
        <Spacer/>
        <Flex gap='50px' align='center' >
          <Login></Login>
          <Link as={RouterLink} to="/">Inicio</Link>
          <button onClick={clearLocalStorage}>Borrar</button>
          <Link style={{ display: 'none' }} as={RouterLink} to="/admin">Admin</Link>
        </Flex>
      </Flex>
    </Box>
  );
};
