import { Box,Text, Center,useColorModeValue,Image, Stack, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {
  return (
    <Center my={6} >
       <Link to={`/articles/${blog.id}`} >
        <Box  maxW={'445px'} w='full' bg={useColorModeValue("white",'gray.900')}  boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'} >
        <Box> <Image src={`${blog.thumbnail_pic}`} /></Box>
        <Stack>
            <Text>Blog</Text>
            <Heading>{blog.title}</Heading>
            <Text>{blog.description}</Text>
            </Stack> 
        </Box>
     </Link>
    </Center>
  )
}

export default BlogCard