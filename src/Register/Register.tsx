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
} from '@chakra-ui/react'
import React from 'react'
import './Register.css'

interface RegisterProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenLogin: () => void;
  }

function Register({ isOpen, onClose, onOpenLogin }: RegisterProps) {
  const initialRef = React.useRef<HTMLInputElement>(null)
  const finalRef = React.useRef<HTMLInputElement>(null)

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
              <Input ref={initialRef} placeholder='Usuario' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Correo</FormLabel>
              <Input placeholder='Correo' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <Input placeholder='Contraseña' />
            </FormControl>
            <Button variant="link" onClick={() => { onClose(); onOpenLogin(); }}>
              ¿Ya tienes cuenta? Inicia sesión
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Registrar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Register
