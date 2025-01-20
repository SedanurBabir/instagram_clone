import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore';
import { Link } from 'react-router-dom';



const SuggestedHeader = () => {
  const {handleLogout, isLoggingOut} = useLogout();
  const authUser = useAuthStore((state)=>state.user);

  return (
    <>
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
           <Link to={`${authUser.username}`}>
         <Flex alignItems={'center'} gap={2}>
            <Avatar src={authUser.profilePicURL} size={'md'} border={'1px solid white'} />
            <Text>{authUser.username}</Text>
        </Flex>
        </Link>
        <Button isLoading={isLoggingOut}  onClick ={handleLogout} size={'xs'} fontWeight={'medium'} color={'blue.500'} cursor={'pointer'}  _hover={{background:'transparent'}} background={'transparent'}  >
           Log out
        </Button>
    </Flex>
    
    </>
  )
}

export default SuggestedHeader