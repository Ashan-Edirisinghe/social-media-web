import React from 'react';
import { Container, AppBar, Typography, Grid, Grow} from '@mui/material';

import news360 from './images/news360.png';

const App = () => { 
    return (
    <Container maxWidth="lg">

        <AppBar position='static'color='inherit'>

            <Typography variant='h2' align='center'>News360</Typography>

            <img src={news360}  alt="news360" height='60' /> 

         </AppBar>

         <Grow in>
            <container>
                <Grid justify='space-between' alignContent='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}> </Grid>
                    <Grid item xs={12} sm={4}> </Grid>

                </Grid>
            </container>
          </Grow>

        </Container>
    );
}
export default App;