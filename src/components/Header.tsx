// src/components/Header.tsx
import { Box, Flex, Link, Spacer, Img } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


const clearLocalStorage = () => {
    localStorage.clear();
    alert('LocalStorage borrado!');
  };
export const Header = () => {
  return (
    <Box bg="brand.30" color="black" px={4} py={2}>
      <Flex alignItems="center">
        <Img style={{width:'200px', top:'0'}} src="logoheader.png"></Img>
        <Spacer />
        <Flex gap={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link href="#">Business</Link>
          <Link href="#">Sports</Link>
          <Link href="#">Blog</Link>
          <button onClick={clearLocalStorage}>Borrar</button>
          <Link as={RouterLink} to="/admin">Admin</Link> {/* Nuevo enlace al Admin */}
        </Flex>
      </Flex>
    </Box>
  );
};
