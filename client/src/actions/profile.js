import * as api from '../api';
import { clerkClient, getAuth } from '@clerk/express';

export const getPosts = () => async (dispatch) => {

    try{
            const {data} = await api.fetchUser();
            dispatch({type: 'FETCH_USER', payload: data});
    }catch(error){
         console.log(error.message);
    }
}