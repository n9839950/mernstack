import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles';
   
const Posts = () => {
     const classes = useStyles();
    return(
        <>
        <h1>Form</h1>
        <Post/>
        <Post/>
        </>
    );
}


export default Posts;