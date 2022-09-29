import { Box,Text, Center,useColorModeValue,Image, Stack, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {

    // console.log(blog,"blog");
    

  return (
    <Center my={6} >
       <Link to={`/articles/${blog.id}`} >
        <Box  maxW={'445px'} w='full' bg={useColorModeValue("white",'gray.900')}  boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'} >
     
         
        <Stack>
            <Image src={blog.thumbnail} />
            <Text>{blog.tittle}</Text>
            <Heading>{blog.sub_title}</Heading>
            <Text>{blog.description}</Text>
            <Image w={'40px'} h={'40px'} borderRadius={"50%"} src={`${blog?.author?.profile_pic}`} /> <span>{blog?.author?.name}</span>
            </Stack> 
        </Box>
     </Link>
    </Center>
  )
}

export default BlogCard