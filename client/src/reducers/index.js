import { combineReducers } from "redux";    
import posts from './posts.js';
import profile from './profile.js';
export default combineReducers({
          posts,
          profile
});