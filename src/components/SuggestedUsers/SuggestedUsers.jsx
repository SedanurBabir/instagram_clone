import React from 'react'
import SuggestedUser from './SuggestedUser'
import {Box, Flex, Text, VStack } from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
          <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>Suggested for you</Text>
          <Text fontSize={12} fontWeight={'bold'} _hover={{color:'gray.400'}} cursor={'pointer'}>See All</Text>
        </Flex>
        <SuggestedUser name='Dan Abrahmov' followers={1392} avatar='https://bit.ly/dan-abramov'/>
        <SuggestedUser name='Ryan Florence' followers={1392} avatar='https://bit.ly/ryan-florence'/>
        <SuggestedUser name='Christian Nwamba' followers={1392} avatar='https://bit.ly/code-beast'/>

        <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
          © 2024 Built By Sedanur Babir
        </Box>
    </VStack>
   
  )
}

export default SuggestedUsers