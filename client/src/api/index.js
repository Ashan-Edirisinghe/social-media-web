import axios from 'axios';

const url="http://localhost:5000/posts";

const fetchpost = () => axios.get(url);