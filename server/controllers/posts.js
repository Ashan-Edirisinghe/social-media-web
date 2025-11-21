import PostMsg from "../models/postMsg.js";
import mongoose from "mongoose";
export const getPosts = async (req, res) => {
    try{
        
        const postMsg = await PostMsg.find();
        console.log(postMsg);
        res.status(200).json(postMsg);
    }catch(error){
        res.status(404).json({message: error.message});
    }
    
}

export const createPost = async (req, res) => {
    console.log('=== CREATE POST REQUEST RECEIVED ===');
    console.log('Request body:', req.body);
    
    const post = req.body;
    const newPost = new PostMsg(post);
    
    try { 
       console.log('Attempting to save post...');
       const savedPost = await newPost.save();
       console.log('Post saved successfully:', savedPost);
       res.status(201).json(savedPost);
    } catch(error){
        console.error('Error saving post:', error);
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const { id : _id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedPost = await PostMsgs.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost);
}