import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleBlogPost } from "../redux/Blogs/action";

const Article = () => {
  const {id}=useParams();
  const dispatch=useDispatch()
  const singleBlog=useSelector(store=>store.BlogReducer.singleBlog);
  
  useEffect(()=>{
    if(Object.keys(singleBlog).length===0 && id){
      dispatch(fetchSingleBlogPost(Number(id)))
    }
  },[id,singleBlog,dispatch])


  return (
    <Container maxW={"3xl"} pb={"4rem"}>
      <Box textAlign="center" py={{ base: 5, md: 10 }}>
        <Avatar
          name={singleBlog?.author?.name}
          size="lg"
          src={`${singleBlog?.author?.profile_pic}`}
        />
        <Text fontSize="lg">{singleBlog?.author?.name}</Text>
        <Text>{singleBlog?.author?.publish_date}</Text>
      </Box>
      <Center textAlign="center">
        <Stack>
          <Heading>
            Your most unhappy customers are your greatest source of learning
          </Heading>
          <Text fontSize="lg">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Text>
          <Box>
            <Image
              rounded={"lg"}
              src={
               `${singleBlog?.thumbnail_pic}`
              }
              alt="Thumbnail Image"
            />
          </Box>
          <Box textAlign="left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
            <br />A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.
            <br />
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default Article;
