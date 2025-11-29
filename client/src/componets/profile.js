import React from 'react';
import { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grid, Grow} from '@mui/material';
import news360 from '../images/news360.png';
import Posts from '../componets/posts/posts.js';
import Forms from '../componets/forms/forms.js';
import { styles } from '../styles.js';

import { useDispatch,useSelector } from 'react-redux';
import {getPosts} from  '../actions/posts.js'; 
import { useUser } from '@clerk/clerk-react';



const Profile = () => {

    const [currentid, setCurrentId] = useState(null);
        const dispatch = useDispatch();
        useEffect(()=>{
              dispatch(getPosts());
        }, [currentid,dispatch]);


    //user login from Clerk
    const { user, isLoaded } = useUser();
    const userId = user?.id;
    const userEmail = user?.primaryEmailAddress?.emailAddress;
    
    console.log('Logged in user:', user);
    console.log('User ID:', userId);
    console.log('User Email:', userEmail);

    return(
         <Container maxWidth="lg">

 



     
         <Grow in>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={9}> 
                        <Posts setCurrentId={setCurrentId} /> 
                    </Grid>
                    <Grid item xs={12} md={3}> 
                        <Forms setCurrentId={setCurrentId} currentid={currentid} /> 
                    </Grid>
                </Grid>
            </Container>
          </Grow>
          
        </Container>
    )

}

export default Profile;