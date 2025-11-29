import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { styles } from './styles.js';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts.js';
import { useUser } from '@clerk/clerk-react';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const { user } = useUser();
    const userId = user?.id;
    
    // Check if current user is the creator of this post
    const isCreator = userId === post.creatorId;
    return (
        <Card sx={styles.card}>
            <CardMedia sx={styles.media} image={post.selectedFile} title={post.title} />
            <div style={styles.overlay}>
                <Typography variant="body1">{post.creator}</Typography>
                <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {isCreator && (
                <div style={styles.overlay2}>
                    <Button style={{color: 'white'}} size="small" onClick={() =>  setCurrentId(post._id) }>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </div>
            )}
            <div style={styles.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography sx={styles.title} variant="h5" gutterBottom component="p">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions sx={styles.cardActions}>
                <Button size="small" color="primary" onClick={() => {dispatch(likePost(post._id)); }}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like {post.likeCount}
                </Button>
                {isCreator && (
                    <Button size="small" color="primary" onClick={() => { dispatch(deletePost(post._id)); }}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Post;