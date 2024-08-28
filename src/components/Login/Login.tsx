import { Button, Flex, Input } from "@chakra-ui/react";
import '/src/App.css'

function Login() {
  return (
    <Flex  flexDir='column' w='50%' m='0 auto' align='center' justifyContent='center' minHeight='85vh'>
      <Input border='solid 1px' m='20px' placeholder="Usuario" />
      <Input border='solid 1px' m={'20px'} placeholder="Contraseña" />
      <Button m='20px' w='200px' style={{backgroundColor:'black',color:'white'}}>Inicar Sesion</Button>
    </Flex>
  );
}

export default Login;
