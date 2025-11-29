import express from 'express';
import {getUser } from '../controllers/profile.js';
import e from 'express';

const router = express.Router();

router.get('/profile', getUser);

export default router;