import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase/firebase';
import useShowToast from '../../hooks/useShowToast';
import useAuthStore from '../../store/authStore';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const GoogleAuth = ({prefix}) => {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state)=>state.login)

  const handleGoogleAuth = async () =>{
    try {
      const newUser = await signInWithGoogle();
      if(!newUser && error){
        showToast('Error', error.message, 'error')
      }
      const userRef = doc(firestore, 'users', newUser.user.uid);
      const userSnap = await getDoc(userRef);
      if(userSnap.exists()){
        //login
        const userDoc = userSnap.data();
        localStorage.setItem('user-info',JSON.stringify(userDoc));
        loginUser(userDoc);
      }else{
        //sign up
         const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          fullName: newUser.user.displayName,
          username: newUser.user.email.split('@')[0],
          bio: '',
          profilePic: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now()
        }
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem('user-info', JSON.stringify(userDoc));
        loginUser(userDoc)
      }

      
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }

  
  return (
    <>
     <Flex justifyContent={'center'} alignItems={'center'} cursor={'pointer'} onClick={handleGoogleAuth}>
        <Image src='/public/google.png' w={25}/>
        <Text mx={2} color={'blue.500'}> {prefix} with Google</Text>
    </Flex>
    </>
  )
}

export default GoogleAuth;