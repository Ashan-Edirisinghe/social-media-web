import PostMsg from "../models/postMsg";
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
   
    const post = req.body;
    const newPost = new PostMsg(post);
    try { 
       const savedPost = await newPost.save();
       res.status(201).json(savedPost);
    } catch(error){
        res.status(409).json({message: error.message});
        }
    
}
