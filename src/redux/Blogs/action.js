
import axios from 'axios';
import * as types from './actionType';




const fetchBlogPostRequest=(payload)=>{
    return{
        type:types.FETCH_BLOG_POST_REQUEST,
        payload
    }
}


const fetchBlogPostSuccess=(payload)=>{
    return{
        type:types.FETCH_BLOG_POST_SUCCESS,
        payload
    }
}



const fetchBlogPostFailure=(payload)=>{
    return{
        type:types.FETCH_BLOG_POST_FAILURE,
        payload
    }
}



export const fetchBlogPost=(payload)=>(dispatch)=>{
    dispatch(fetchBlogPostRequest());
    axios('/blogs')
    .then((r)=>dispatch(fetchBlogPostSuccess(r.data)))
    .catch((e)=>dispatch(fetchBlogPostFailure(e.data)))
}



// SINGLE POST 




const fetchSingleBlogPostRequest=(payload)=>{
    return{
        type:types.FETCH_SINGLE_BLOG_POST_REQUEST,
        payload
    }
}


const fetchSingleBlogPostSuccess=(payload)=>{
    return{
        type:types.FETCH_SINGLE_BLOG_POST_SUCCESS,
        payload
    }
}



const fetchSingleBlogPostFailure=(payload)=>{
    return{
        type:types.FETCH_SINGLE_BLOG_POST_FAILURE,
        payload
    }
}




export const fetchSingleBlogPost=(payload)=>(dispatch)=>{
    dispatch(fetchSingleBlogPostRequest());
    axios(`/blogs/${payload}`)
    .then((r)=>dispatch(fetchSingleBlogPostSuccess(r.data)))
    .catch((e)=>dispatch(fetchSingleBlogPostFailure(e.data)))
}




// 