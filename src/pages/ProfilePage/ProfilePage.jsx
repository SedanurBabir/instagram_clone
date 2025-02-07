import { Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../../components/Profile/ProfileHeader';
import ProfileTabs from '../../components/Profile/ProfileTabs';
import ProfilePosts from '../../components/Profile/ProfilePosts';
import { Link, useParams } from 'react-router-dom';
import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername';

const ProfilePage = () => {
  const {username} = useParams();
  const {isLoading, userProfile} = useGetUserProfileByUsername(username);
  const userNotFound = !isLoading && !userProfile;
  if(userNotFound) return <UserNotFound/>
  return (
    <Container maxW="container.lg" py={5}>
      <Flex
      py={10}
      px={4}
      pl={{base:4,md:10}}
      w={'full'}
      mx={'auto'}
      flexDirection={'column'}
      >
        {!isLoading && userProfile && <ProfileHeader userProfile = {userProfile}/>}
        {isLoading && <ProfileHeaderSkeleton/>}
      </Flex>
      <Flex
      px={{base:2,sm:4}}
      maxW={'full'}
      mx={'auto'}
      flexDirection={'column'}
      borderTop={'1px solid'}
      borderColor={'whiteAlpha.300'}
      >
        <ProfileTabs/>
        <ProfilePosts/>
      </Flex>
    </Container>
  )
}

export default ProfilePage;

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
    gap={{base:4,sm:10}}
    flexDirection={{base:'column',sm:'row'}}
    justifyContent={'center'}
    alignItems={'center'}
    >
      <SkeletonCircle size='24' />
      <VStack alignItems={{base:'center', sm:'flex-start'}} gap={2} mx={'auto'} flex={1}>
        <Skeleton height='12px' width='150px'/>
        <Skeleton height='12px' width='100px'/>
      </VStack>
    </Flex>
  )};

const UserNotFound = () => {
  return (
    <Flex dir='column' textAlign={'center'} mx={'auto'} >
      <Text fontSize={'2xl'}>User Not Found</Text>
      <Link to={'/'} color={'blue.500'} w={'max-content'} mx={'auto'}>Go Home</Link>
    </Flex>
    
  )
}