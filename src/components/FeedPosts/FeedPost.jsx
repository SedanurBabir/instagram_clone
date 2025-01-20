import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'

const FeedPost = ({img, username, avatar}) => {
  return (
    <>
    <PostHeader username={username}  avatar ={avatar} />
    <Box my={2}>
        <Image src={img} alt='user_profile_picture' />
    </Box>
    <PostFooter username={username}/>
    </>
    
  )
}

export default FeedPost