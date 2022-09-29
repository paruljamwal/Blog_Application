import {
  Box,
  Container,
  Heading,
 
} from "@chakra-ui/react";
import React from "react";
import ArticlesUpdator from "../Components/ArticlesUpdator";

const CreateArticle = () => {
 
  return (
    <Container>
     <Box textAlign="center" py={{ base: 2, md: 10 }}>
    <Heading>Create Article</Heading>
  </Box>
  <ArticlesUpdator/>
    </Container>
  );
};

export default CreateArticle;
