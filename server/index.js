import express from 'express';  
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express();
app.use(bodyParser.json({limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://AE_db_user:Johnwick4@cluster0.9027uj6.mongodb.net/social-media-db?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => console.log('MongoDB connection error:', error.message));