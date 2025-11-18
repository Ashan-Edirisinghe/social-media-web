import PostMsg from "../models/postMsg.js";
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
