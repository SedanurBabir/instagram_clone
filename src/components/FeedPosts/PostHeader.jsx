import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const PostHeader = ({username, avatar}) => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={2}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar src={avatar} size={'sm'} />
            <Flex flexDirection={'row'} alignItems={'center'} gap={3}>
                <Text fontSize={'sm'} fontWeight={'bold'}>{username}</Text>
                <Text fontSize={'xs'} fontWeight={'bold'} color={'gray.500'}>. 1w</Text>     
            </Flex>
        </Flex>
        <Box cursor={'pointer'}>
            <Text fontSize={12} fontWeight={'bold'} color={'blue.500'} _hover={{ color:'white'}} transition={'0.2s ease-in-out'}>Unfollow</Text>
        </Box>

    </Flex>
  )
}

export default PostHeader