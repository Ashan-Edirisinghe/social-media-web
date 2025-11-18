import React from 'react';
import Post from './post/post.js';
import { styles } from './styles.js';
import { useSelector } from 'react-redux';


const Posts = () => {

    const posts = useSelector((state) => state.posts);
    return (
        <>  
              

        <Post />
        <Post />

        </>
    )
}

export default Posts;