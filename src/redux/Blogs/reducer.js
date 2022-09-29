import * as types from './actionType';


const initialStore={
    blogs:[],
    loading:false,
    error:""
}


export const BlogReducer=(store=initialStore,{type,payload})=>{
  switch (type) {

    case types.FETCH_BLOG_POST_REQUEST:
        return{
            ...store,
            loading:true,
            error:""
        }
    
        case types.FETCH_BLOG_POST_SUCCESS:
            return{
                ...store,
                loading:false,
                blogs:payload,
                error:""
            }

        case types.FETCH_BLOG_POST_FAILURE:
        return{
            ...store,
            loading:false,
            error:payload
        }
        
        
    default:
     return   store
  
  }
}