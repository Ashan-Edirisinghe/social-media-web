import React from 'react';
import { useEffect } from 'react';
import { Container, AppBar, Typography, Grid, Grow} from '@mui/material';

import news360 from './images/news360.png';
import Posts from './componets/posts/posts.js';
import Forms from './componets/forms/forms.js';
import { styles } from './styles.js';

import { useDispatch } from 'react-redux';
import {getPosts} from  './actions/posts.js'; 


const App = () => { 
      
    const dispatch = useDispatch();
    useEffect(()=>{
          dispatch(getPosts());
    }, [dispatch]);
    return (
    <Container maxWidth="lg">

        <AppBar sx={styles.appBar} position='static' color='inherit' >

            <Typography sx={styles.heading} variant='h2' align='center'>News360
                 <img src={news360}  alt="news360" height='60' style={styles.image}/>
            </Typography>

            

         </AppBar>

         <Grow in>
            <Container>
                <Grid container justify='space-between' alignContent='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}> <Posts /> </Grid>
                    <Grid item xs={12} sm={4}> <Forms /> </Grid>

                </Grid>
            </Container>
          </Grow>

        </Container>
    );
}
export default App;