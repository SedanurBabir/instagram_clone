import { Box, Container, Flex, Image, StackDivider, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} >
        <Container maxW={"container.xl"} padding={5}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={100} >
                {/* Left Area */}
                <Box display={{base:"none", md:"block"}}>
                <Image src="../public/auth.png" h={650} alt="Phone"/>
                </Box>
                {/* Right Area */}
                <VStack spacing={4} align='stretch' minW={350}>
                <AuthForm/>
                <Box textAlign={"center"}>Get the app...</Box>
                <Flex gap={5} justifyContent={"center"}>
                <Image src="../public/microsoft.png" h={"10"}  alt="Microsoft"/>
                <Image src="../public/playstore.png" h={"10"} alt="PlayStore"/>
                </Flex>
                </VStack>
            </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage