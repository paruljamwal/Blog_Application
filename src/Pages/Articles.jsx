import { Box, Container, Heading,Flex } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../Components/BlogCard";
import { fetchBlogPost } from "../redux/Blogs/action";

const Articles = () => {
  const dispatch=useDispatch();
  const blog=useSelector(store=>store.BlogReducer.blogs)

  useEffect(()=>{
    if(blog?.length===0){
      dispatch(fetchBlogPost());
    }
  },[blog?.length,dispatch])
  return (
    <Container maxW={"3xl"}>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Trending</Heading>
      </Box>
      <Box>
        {/* import blog card */}
        <Flex flexWrap={'wrap'} justifyContent={'space-around'} >
          {
            blog.length && blog.map((e)=>(
               <BlogCard key={e.id} blog={e} />
            ))
          }

        </Flex>
      </Box>
    </Container>
  );
};

export default Articles;
