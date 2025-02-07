import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react'
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword';

const Register = () => {
    const [inputs, setInputs] = useState({
        username: '',
        fullName:'',
        email: '',
        password: '',
        })
    const [showPassword,setShowPassword]=useState(false);
    const {loading, error, signup}=useSignUpWithEmailAndPassword();
  return (
    <>
    <Input variant='outline' placeholder='E-Mail'  fontSize={14} size={'sm'} type='email' value={inputs.email} onChange={(e)=> setInputs({...inputs,email:e.target.value})}/>
    <Input variant='outline' placeholder='Username'  fontSize={14} size={'sm'} type='text' value={inputs.username} onChange={(e)=> setInputs({...inputs,username:e.target.value})}/>
    <Input variant='outline' placeholder='Full Name'  fontSize={14} size={'sm'} type='text' value={inputs.fullName} onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}/>
    <InputGroup>
        <Input variant='outline' placeholder='Password' fontSize={14} size={'sm'} type={showPassword ? 'text' :'password'} value={inputs.password} onChange={(e)=> setInputs({...inputs,password:e.target.value})}/>
        <InputRightElement h='full'>
        <Button variant='ghost' size={'sm'} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
        </Button>
        </InputRightElement>
    </InputGroup>
    {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
            <AlertIcon fontSize={12}/>
            {error.message}
        </Alert>
    )
    }
    <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14} isLoading={loading} onClick={()=>signup(inputs)}>
        Sign Up
    </Button>
    </>
  )
}

export default Register;