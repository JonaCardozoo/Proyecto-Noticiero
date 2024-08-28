// src/components/Header.tsx
import { Box, Flex, Link, Spacer} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


const clearLocalStorage = () => {
    localStorage.clear();
    alert('LocalStorage borrado!');
  };
export const Header = () => {
  return (
    <Box bg="brand.30" color="black" px={4} py={2}>
      <Flex alignItems="center">
        <a href="/"><img style={{width:'200px'}} src="logoheader.png" alt="" /></a>
        <Spacer />
        <Flex gap={4}>
          <Link as={RouterLink} to="/">Inicio</Link>
          <button onClick={clearLocalStorage}>Borrar</button>
          <Link as={RouterLink} to="/admin">Admin</Link>
        </Flex>
      </Flex>
    </Box>
  );
};
