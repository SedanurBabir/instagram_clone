import { Box, Image, VStack, Stack, Input, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import GoogleAuth from './GoogleAuth'
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword:''
    })

  return (
    <>
      <Box border={"1px solid lightgray"} borderRadius={4} padding={5} width={'100%'}>
        <VStack>
            <Image src='/public/logo.png' h={'24'} cursor={'pointer'} alt='InstagramLogo' />
            {isLogin ? <Login/> : <Register/>}
            <Flex justifyContent={'center'} alignItems={'center'} my={4} gap={1} w={'full'}>
              <Box flex={2} h={'1px'} bg={'gray.200'}/>
              <Text mx={3} color={'gray'} fontWeight={'bold'}>OR</Text>
              <Box flex={2} h={'1px'} bg={'gray.200'}/>
            </Flex>
          <GoogleAuth prefix={isLogin ? 'Log in' : 'Sign Up'}/>
        </VStack>
      </Box>
      <Box border={'1px solid lightgray'} borderRadius={4} padding={5}>
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Box mx={2} fontSize={13}>
            {isLogin ? "Don't have an account ?" : "Already have an account ?"}
          </Box>
          <Box onClick={()=> {setIsLogin(!isLogin)}} color={'blue.500'} cursor={'pointer'} fontSize={14}>
           {isLogin ? "Sign Up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default AuthForm