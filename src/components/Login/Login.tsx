import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  useDisclosure
} from '@chakra-ui/react';
import './Login.css';
import Register from '../Register/Register';

interface LoginProps {
  onLoginSuccess: (role: string) => void;
  onClose: () => void;
}

function Login({ onLoginSuccess, onClose }: LoginProps) {
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onClose: onRegisterClose } = useDisclosure();
  const initialRef = React.useRef<HTMLInputElement>(null);
  const finalRef = React.useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://apinode-production-5616.up.railway.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || 'Error en la solicitud');
      }


      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);


      onLoginSuccess(data.role);
      onClose();

      toast({
        title: "Inicio de sesión con éxito",
        status: "success",
        duration: 4000,
        isClosable: true
      });

    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Error al iniciar sesión",
          description: error.message || "Revise los datos o regístrese",
          status: "error",
          duration: 4000,
          isClosable: true
        });
      } else {
        toast({
          title: "Error desconocido",
          status: "error",
          duration: 4000,
          isClosable: true
        });
      }
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
          <ModalHeader>Inicia sesión</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb='6'>
            <FormControl>
              <FormLabel>Usuario</FormLabel>
              <Input ref={initialRef} placeholder='Usuario' value={username} onChange={(e) => setUsername(e.target.value)} required />
            </FormControl>

            <FormControl mt='4'>
              <FormLabel>Contraseña</FormLabel>
              <Input type='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </FormControl>

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
