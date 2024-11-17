import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import './Headers.css';
import Login from "../Login/Login";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isAdminLinkEnabled, setIsAdminLinkEnabled] = useState(false);
  const navigate = useNavigate();

  // Verifica si el usuario es admin al cargar la página
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      setIsAdminLinkEnabled(true);
    }
  }, []);

  const handleLoginSuccess = (role: string) => {
    if (role === 'admin') {
      setIsAdminLinkEnabled(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAdminLinkEnabled(false);
    navigate('/'); // Redirigir al inicio
  };

  return (
    <Box bg="#822727" color="black" px={4} py={2}>
      <Flex alignItems="center">
        <a href="/"><img style={{ width: '200px' }} src="logoheader.png" alt="" /></a>
        <Spacer />
        <Flex gap="50px" align="center">
          {!isAdminLinkEnabled && <Login onLoginSuccess={handleLoginSuccess} onClose={() => { }} />}
          {isAdminLinkEnabled && (
            <>
              <Link
                as={RouterLink}
                to="/admin"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                Admin
              </Link>
              <Button
                onClick={handleLogout}
                colorScheme="red"
                variant="outline"
              >
                Cerrar sesión
              </Button>
            </>
          )}
          <Link
            as={RouterLink}
            to="/proximos-partidos"
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Próximos partidos
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
