import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import './Login.css';
import Register from '../Register/Register';

/*
interface LoginProps {
  onLoginSuccess: () => void;
}
  */

function Login() {
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onClose: onRegisterClose } = useDisclosure();
  const initialRef = React.useRef<HTMLInputElement>(null);
  const finalRef = React.useRef<HTMLInputElement>(null);

  const [email, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario: email, password }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      /*
      onLoginSuccess(); 
      toast({
        title: "Inicio de sesión con éxito",
        status: "success",
        duration: 4000,
        isClosable: true
      });
      */
    } catch (error) {
      toast({
        title: "Error al iniciar sesión",
        description: "Revise los datos o regístrese",
        status: "error",
        duration: 4000,
        isClosable: true
      });
    }
  };

  return (
    <>
      <Button _hover={{ background: 'transparent' }} bg='transparent' onClick={onLoginOpen}>
        <span className="material-symbols-outlined login" style={{ fontSize: '40px', textDecoration: 'none' }}>
          account_circle
        </span>
      </Button>

      {/* Modal de Login */}
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isLoginOpen} onClose={onLoginClose} isCentered={true}>
        <ModalOverlay style={{ backdropFilter: 'blur(5px)' }} />
        <ModalContent>
          <ModalHeader>Únete a nosotros</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb='6'>
            <FormControl>
              <FormLabel>Usuario</FormLabel>
              <Input ref={initialRef} placeholder='Usuario' value={email} onChange={(e) => setUsuario(e.target.value)} required />
            </FormControl>

            <FormControl mt='4'>
              <FormLabel>Contraseña</FormLabel>
              <Input type='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </FormControl>
          
            <Button variant="link" onClick={() => { onLoginClose(); onRegisterOpen(); }}>
              ¿Todavía no tienes cuenta? Regístrate
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr='3' onClick={handleLogin}>
              Ingresar
            </Button>
            <Button onClick={onLoginClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal de Registro */}
      <Register isOpen={isRegisterOpen} onClose={onRegisterClose} onOpenLogin={onLoginOpen} />
    </>
  );
}

export default Login;
