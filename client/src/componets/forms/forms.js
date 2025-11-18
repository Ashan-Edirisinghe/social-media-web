import React, { useState, useCallback } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { styles } from './styles.js';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts.js';


const Forms = () => {

    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        clear();
    };

    const clear = () => {
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        });
    };

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPostData({ ...postData, selectedFile: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }, [postData]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop,
        accept: { 'image/*': [] },
        multiple: false
    });

    return (
        <Paper sx={styles.paper}>
            <form autoComplete="off" noValidate sx={{ ...styles.root, ...styles.form }} onSubmit={handleSubmit}>
                <Typography variant="h6" gutterBottom>
                    Creating a Post
                </Typography>
                
                <TextField 
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />

                <TextField 
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />

                <TextField 
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />

                <TextField 
                    name="tags"
                    variant="outlined"
                    label="Tags (comma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                
                <Box 
                    {...getRootProps()} 
                    sx={{
                        ...styles.fileInput,
                        border: '2px dashed #ccc',
                        borderRadius: '4px',
                        padding: '20px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        backgroundColor: isDragActive ? '#e3f2fd' : '#fafafa'
                    }}
                >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <Typography>Drop the image here...</Typography>
                    ) : (
                        <Typography>
                            Drag & drop an image here, or click to select
                        </Typography>
                    )}
                    {postData.selectedFile && (
                        <Typography variant="caption" color="primary" sx={{ mt: 1, display: 'block' }}>
                            ✓ Image selected
                        </Typography>
                    )}
                </Box>

                <Button 
                    sx={styles.buttonSubmit}
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    type="submit" 
                    fullWidth
                >
                    Submit
                </Button>
                
                <Button 
                    variant="contained" 
                    color="secondary" 
                    size="small" 
                    onClick={clear} 
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Forms;