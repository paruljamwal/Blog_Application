import { Box, Container, Heading } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import ArticlesUpdator from '../Components/ArticlesUpdator';

const UpdateArticles = () => {

    const currentBlog=useSelector(store=>store.BlogReducer.singleBlog)

//    console.log(currentBlog,"c")
  return (
    <Container maxW={'3xl'} pb={'4rem'} >
        <Box textAlign={'center'} >
          <Heading>Update Article</Heading>
        </Box>
        <ArticlesUpdator singleBlog={currentBlog} />
    </Container>
  )
}

export default UpdateArticles;