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
  useToast
} from '@chakra-ui/react';
import './Register.css';

interface RegisterProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

function Register({ isOpen, onClose, onOpenLogin }: RegisterProps) {
  const initialRef = React.useRef<HTMLInputElement>(null);
  const finalRef = React.useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario: username, password, rol: 'user' }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      toast({
        title:"Usuario registrado con exito",
        status:"success",
        duration:4000,
        isClosable:true

      });
      onClose();  
    } catch (error) {
      toast({
        title:"Ese usuario ya esta registrado",
        description:"Ingrese con su cuenta",
        status:"error",
        duration:4000,
        isClosable:true
      });
    }
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
      >
        <ModalOverlay style={{ backdropFilter: 'blur(5px)' }} />
        <ModalContent>
          <ModalHeader>Únete a nosotros</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Usuario</FormLabel>
              <Input
                ref={initialRef}
                placeholder='Usuario'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Correo</FormLabel>
              <Input
                placeholder='Correo'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <Input
                placeholder='Contraseña'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button variant="link" onClick={() => { onClose(); onOpenLogin(); }}>
              ¿Ya tienes cuenta? Inicia sesión
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleRegister}>
              Registrar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
