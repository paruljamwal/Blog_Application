import { EditIcon } from "@chakra-ui/icons";
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
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchSingleBlogPost } from "../redux/Blogs/action";

const Article = () => {
  const {id}=useParams();
  const dispatch=useDispatch();
  const location=useLocation();
  const singleBlog=useSelector(store=>store.BlogReducer.singleBlog);
  
  useEffect(()=>{
    if(Object.keys(singleBlog).length===0 && id){
      dispatch(fetchSingleBlogPost((id)))
    }
  },[id,singleBlog,dispatch])

// console.log(singleBlog);

  return (
    <Container maxW={"3xl"} pb={"4rem"}>
      <Box textAlign="center" py={{ base: 5, md: 10 }}>
        <Avatar
          name={singleBlog?.author?.name}
          size="lg"
          src={`${singleBlog?.author?.profile_pic}`}
        />


         {/* update Icon */}

         <Box>
          <Link to={`${location.pathname}/update`} >
          <EditIcon/>
          </Link>
         </Box>

        <Text fontSize="lg">{singleBlog?.author?.name}</Text>
        <Text>{singleBlog?.author?.publish_date}</Text>
      </Box>
      <Center textAlign="center">
        <Stack>
          <Heading>
            {singleBlog?.tittle}
          </Heading>
          <Text fontSize="lg">
            {singleBlog.sub_title}
          </Text>
          <Box>
            <Image
              rounded={"lg"}
              src={
               `${singleBlog?.thumbnail}`
              }
              alt="Thumbnail Image"
            />
          </Box>
          <Box textAlign="left">
           {singleBlog?.description}
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default Article;
