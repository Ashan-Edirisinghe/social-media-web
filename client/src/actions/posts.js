import * as api from '../api';

export const getPosts = () => async (dispatch) => {

      try{
           const {data} = await api.fetchPosts(); 
           dispatch({type: 'FETCH_ALL', payload: data});
      }catch(error){
           console.log(error.message);
      }

    
}


export const createPost = (post) => async (dispatch) => {
    console.log('Creating post with data:', post);
    
    try{
        const { data } = await api.createPost(post);
        console.log('Post created successfully:', data);
        dispatch({ type: 'CREATE', payload: data });
    }catch(error){
        console.error('Error creating post:', error);
        console.error('Error response:', error.response?.data);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    console.log('Updating post with ID:', id, 'Data:', post);
    try{
        const { data } = await api.updatePost(id, post);
        console.log('Post updated successfully:', data);
        dispatch({ type: 'UPDATE', payload: data });
    }catch(error){
        console.error('Error updating post:', error);
        console.error('Error response:', error.response?.data);
    }   
}