import React from 'react';
import { Container, AppBar, Typography, Box, Button } from '@mui/material';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
 
import Profile from './componets/profile.js';


const App = () => { 
     
    return (
        <Container maxWidth="lg">
            <AppBar position='static' color='inherit' sx={{ borderRadius: 2, margin: '30px 0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px 50px' }}>
                <Typography variant='h2' align='center' sx={{ color: 'rgba(0,183,255, 1)' }}>
                    News360
                </Typography>
                <Box sx={{ marginLeft: 'auto' }}>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="contained" color="primary">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </Box>
            </AppBar>

            <SignedIn>
                <Profile />
            </SignedIn>

            <SignedOut>
                <Box sx={{ textAlign: 'center', marginTop: '100px' }}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to News360
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        Please sign in to view and create posts
                    </Typography>
                    <SignInButton mode="modal">
                        <Button variant="contained" color="primary" size="large">
                            Sign In to Continue
                        </Button>
                    </SignInButton>
                </Box>
            </SignedOut>
        </Container>
    );
}
export default App;