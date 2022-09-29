import { DeleteIcon } from '@chakra-ui/icons'
import { Box,Text, Center,useColorModeValue,Image, Stack, Heading } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBlogPost } from '../redux/Blogs/action'

const BlogCard = ({blog}) => {

    const dispatch=useDispatch();
    console.log(blog,"blog");
    // const removeArticle=(id)=>{
    //     // console.log(id);
    //     dispatch(deleteBlogPost(id))
    // }

    useEffect(()=>{

    },[blog])

  return (
    <Center my={6} >
        <Box  maxW={'445px'} w='full' bg={useColorModeValue("white",'gray.900')}  boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'} >
     
       <Link to={`/articles/${blog.id}`} >
         
        <Stack>
            <Image src={blog.thumbnail} />
            <Text>{blog.tittle}</Text>
            <Heading>{blog.sub_title}</Heading>
            <Text>{blog.description}</Text>
            <Image w={'40px'} h={'40px'} borderRadius={"50%"} src={`${blog?.author?.profile_pic}`} /> <span>{blog?.author?.name}</span>
            </Stack> 
      </Link>
            {/* <DeleteIcon onClick={()=>removeArticle(`${blog.id}`)} color={'red'} /> */}
        </Box>
    </Center>
  )
}

export default BlogCard