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
} from '@chakra-ui/react'
import React from 'react'
import './Login.css'
import Register from '../../Register/Register'

function Login() {
  const {
      isOpen: isLoginOpen,
      onOpen: onLoginOpen,
      onClose: onLoginClose,
  } = useDisclosure()

  const {
      isOpen: isRegisterOpen,
      onOpen: onRegisterOpen,
      onClose: onRegisterClose,
  } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
      <>
          <Button _hover={{ background: 'transparent' }} bg='transparent' onClick={onLoginOpen}>
              <span className="material-symbols-outlined login" style={{ fontSize: '40px', textDecoration: 'none' }}>
                  account_circle
              </span>
          </Button>

          {/* Modal de Login */}
          <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isLoginOpen}
              onClose={onLoginClose}
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
                          <FormLabel>Contraseña</FormLabel>
                          <Input placeholder='Contraseña' />
                      </FormControl>
                      <Button variant="link" onClick={() => { onLoginClose(); onRegisterOpen(); }}>
                          ¿Todavía no tienes cuenta? Regístrate
                      </Button>
                  </ModalBody>

                  <ModalFooter>
                      <Button colorScheme='blue' mr={3}>
                          Ingresar
                      </Button>
                      <Button onClick={onLoginClose}>Cancelar</Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>

          {/* Modal de Registro */}
          <Register
              isOpen={isRegisterOpen}
              onClose={onRegisterClose}
              onOpenLogin={onLoginOpen}
          />
      </>
  )
}

export default Login
