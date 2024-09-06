'use client'


import {
  Box,
  chakra,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'
import { ReactNode } from 'react'
import './Footer.css'


const Logo = () => {
  return (
    <img style={{ width: '150px' }} src="logoheader.png" alt="" />
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Logo />
        <Stack  direction={'column'} align={'center'} spacing={3}>
          <Text>© 2024 Codigo Patron. Todos los derechos reservados</Text>
          
          
          <Link 
          className='Link_publicidad'
          style={{textDecoration:'none'}} 
          href='https://wa.link/u274zd'
          fontSize={'15px'} 
          isExternal
          color={'white'}
          
          >
          
          <Flex align='center'>
          <span className="material-symbols-outlined logo" style={{margin:'5px'}}>
            open_in_new
          </span> Publicidad
          </Flex>
          </Link>
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <div className='Twitter-icon'>
            <SocialButton label={'Twitter'} href={'https://x.com/CodigoPatron_'}>
              <FaTwitter />
            </SocialButton>
          </div>
          <div className='Youtube-icon'>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/@codigopatron2336'}>
              <FaYoutube />
            </SocialButton>
          </div>
          <div className='Instagram-icon'>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/codigopatron/'}>
              <FaInstagram />
            </SocialButton>
          </div>
          <div className='Facebook-icon'>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/profile.php?id=100085134386557'}>
              <FaFacebook />
            </SocialButton>
          </div>

        </Stack>
      </Container>
    </Box>
  )
}
export default Footer