import { Box, Button, Container, FormControl, FormLabel, Input, Select, Stack, Textarea } from '@chakra-ui/react'
import React, { useReducer } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBlogPost } from '../redux/Blogs/action';

const ArticlesUpdator = ({currentBlog}) => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
   
   
    const initialValues = {
        id:'',
        title: "",
        sub_title: "",
        thumbnail_pic: "",
        description: "",
        author_name: "",
        author_profile_pic:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      };
    
      const [formData, setFormData] = useReducer(
        (currData, newData) => ({ ...currData, ...newData }),
        initialValues
      );


      const handleFormDataChange = (event) => {
        const { name, value } = event.target;
        setFormData({ [name]: value });
      };
      // console.log(formData);
    
    
  const createApplication=()=>{
    const newData={
      id:'',
      tittle:formData.title,
      sub_title:formData.sub_title,
      thumbnail:formData.thumbnail_pic,
      description:formData.description,
       author:{
       name:formData.author_name,
       profile_pic:formData.author_profile_pic,
       publish_date: new Date().toLocaleDateString()     
      
      }
    }

    dispatch(createBlogPost(newData))
     navigate('/articles')
  } 


  useEffect(()=>{
   if(currentBlog && Object.keys(currentBlog).length){
    setFormData({
        title: currentBlog.tittle ,
        sub_title: currentBlog.sub_title ,
        thumbnail_pic: currentBlog.thumbnail ,
        description:currentBlog.description ,
        author_name: currentBlog.author.name ,

    })
   }
  },[currentBlog]);

  const handelUpdateArticle=()=>{
    
  }
      
  return (
   <Container>
     <Box>
    <Stack spacing="24px">
      <FormControl isRequired>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          id="title"
          placeholder="Please enter blog title"
          name="title"
          onChange={handleFormDataChange}
          value={formData.title}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="sub-title">Sub-Title</FormLabel>
        <Input
          id="sub-title"
          placeholder="Please enter blog sub-title"
          name="sub_title"
          onChange={handleFormDataChange}
          value={formData.sub_title}
 />
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="url">Thumbnail Pic URL</FormLabel>

        <Input
          type="url"
          id="url"
          name="thumbnail_pic"
          placeholder="Please enter thumbnail pic URL"
          onChange={handleFormDataChange}
          value={formData.thumbnail_pic}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="author">Select Author</FormLabel>
        <Select
          id="author"
          defaultValue={formData.author_name}
          name="author_name"
          onChange={handleFormDataChange}
          placeholder="Select Author"
          value={formData.author_name}
        >
          <option value="Masai School">Masai School</option>
          <option value="Parul">Parul Jamwal</option>
          <option value="Abhi">Abhi</option>
          <option value="Paras">Paras</option>


        </Select>
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="desc">Description</FormLabel>
        <Textarea
          id="desc"
          name="description"
          value={formData.description}
          onChange={handleFormDataChange}
        />
      </FormControl>
    </Stack>
    { currentBlog ? <Button colorScheme={'pink'} onClick={handelUpdateArticle}  >Update Article</Button>  : <Button onClick={createApplication} >Create Application</Button>}
  </Box>
   </Container>
 
  )
}

export default ArticlesUpdator