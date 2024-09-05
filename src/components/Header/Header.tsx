import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import './Headers.css';
import Login from "../Login/Login";
import { useState } from "react";

export const Header = () => {
  const [isAdminLinkEnabled, setIsAdminLinkEnabled] = useState(false);

  const handleLoginSuccess = () => {
    setIsAdminLinkEnabled(true);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    alert('LocalStorage borrado!');
  };

  return (
    <Box bg="#822727" color="black" px={4} py={2}>
      <Flex alignItems="center">
        <a href="/"><img style={{ width: '200px' }} src="logoheader.png" alt="" /></a>
        <Spacer />
        <Flex gap='50px' align='center'>
          <Login onLoginSuccess={handleLoginSuccess} />
          <button onClick={clearLocalStorage}>Borrar</button>
          <Link
            as={RouterLink}
            to="/admin"
            /* style={{
              pointerEvents: isAdminLinkEnabled ? 'auto' : 'none',
              color: isAdminLinkEnabled ? 'blue' : 'gray',
              textDecoration: isAdminLinkEnabled ? 'underline' : 'none',
              cursor: isAdminLinkEnabled ? 'pointer' : 'not-allowed'
            }}
              */
          >
            Admin
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
