import { ButtonGroup, Card, CardBody, CardFooter, CardHeader, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";

function ProximosPartidos() {
  return (
    <div>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}>
        <GridItem colSpan={1}>
          <Card bgImage="url('https://img.freepik.com/fotos-premium/textura-fondo-rojo-viejo-abstracto_196038-2457.jpg')" bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            color="white" maxW='sm'>
            <CardHeader color={'white'}>
              <Text >Proximo partido</Text>
            </CardHeader>
            <CardBody >
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImXWLg4dSNqdOn2Qal7j9VJlPp-EVMF6WJ74dxqCDn-Ji6ZB_jDKslhFpfxLSc4zjGcQ&usqp=CAU'
                alt='Green double couch with wooden legs'
                objectFit={'cover'}
                borderRadius='lg'
                boxShadow={'2xl'}
              />
              <Stack mt='6' spacing='3'>
                <Heading size='sm'>Patronato vs Guillermo Brown de Puerto Madryn</Heading>

              </Stack>
            </CardBody>

            <CardFooter style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ButtonGroup spacing='2' >
              </ButtonGroup>
            </CardFooter>
          </Card >
        </GridItem>
        <GridItem colSpan={3}>
          <Card bgSize={'cover'} bgImage="url('https://img.freepik.com/fotos-premium/textura-fondo-rojo-viejo-abstracto_196038-2457.jpg')" color={'white'} maxW='sm'>
            <CardHeader>
              <h2>Proximos partidos</h2>
            </CardHeader>
            <CardBody>
              <p>Este es el contenido del proximo partido</p>
            </CardBody>
            <CardFooter>
              <p>Este es el contenido del footer del proximo partido</p>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>

    </div>
  );
}

export default ProximosPartidos;


