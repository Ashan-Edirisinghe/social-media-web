import { redirect } from 'react-router'
import { clerkClient, getAuth } from '@clerk/react-router/server'
import { get } from 'mongoose';


export const getUser = async (req, res) => {
    try {
       const { isAuthenticated,userId } = getAuth(req);

    if (!isAuthenticated) {
    return res.redirect('/sign-in?redirect_url=' + req.originalUrl);
  }

  const user = await clerkClient.users.getUser(userId);

  return res.status(200).json({  user  });
  console.log(user);

    }catch (error) {
        res.status(404).json({message: error.message});
    }
}