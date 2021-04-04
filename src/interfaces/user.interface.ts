import mongoose from '../database'
import { PostI } from './post.interface';
export interface UserI {
    name: String,
    email: String,
    password?: String,
    posts: PostI[] | string[]
}

export default interface UserSI extends UserI, mongoose.Document{}