import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const SuggestedUser = ({name, followers, avatar}) => {
  const [isFollowed, setIsFollowed]= useState(false)
  return (
    <Flex alignSelf={'start'} justifyContent={'space-between'} w={'full'}>
      <Avatar src={avatar} />
      <Flex direction="column" ml={2}>
        <Text fontSize={12} fontWeight="bold">{name}</Text>
        <Text fontSize={10} color="gray.500">{followers} followers</Text>
      </Flex>
      <Button background={'transparent'} color={'blue.400'} fontSize={13} _hover={{color:'white'}} onClick={()=>{setIsFollowed(!isFollowed)}}>
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Flex>
  )
}

export default SuggestedUser