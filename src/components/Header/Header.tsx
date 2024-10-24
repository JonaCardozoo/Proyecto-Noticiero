import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import './Headers.css';
import Login from "../Login/Login";
import { useState } from "react";

export const Header = () => {
  const [isAdminLinkEnabled, setIsAdminLinkEnabled] = useState(false);

  const handleLoginSuccess = (role: string) => {
    if (role === 'admin') {
      setIsAdminLinkEnabled(true);
    }
  };

 
  const handleCloseLogin = () => {
    //
  };
  
  return (
    <Box bg="#822727" color="black" px={4} py={2}>
      <Flex alignItems="center">
        <a href="/"><img style={{ width: '200px' }} src="logoheader.png" alt="" /></a>
        <Spacer />
        <Flex gap='50px' align='center'>
          <Login onLoginSuccess={handleLoginSuccess} onClose={handleCloseLogin} />
          <Link
            as={RouterLink}
            to="/admin"
            style={{
              display: isAdminLinkEnabled ? 'inline' : 'none',
              color: 'black',
              textDecoration: 'none'
            }}
          >
            Admin
          </Link>
          <Link
            as={RouterLink}
            to="/proximos-partidos"
          >
            Proximos partidos
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
