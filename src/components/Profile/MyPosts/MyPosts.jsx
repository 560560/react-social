import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 3, message: 'Yo!', likesCount: 5}

]

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post id={postData[0].id} message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post id={postData[1].id} message={postData[1].message} likesCount={postData[1].likesCount}/>
                <Post id={postData[2].id} message={postData[2].message} likesCount={postData[2].likesCount}/>
            </div>

        </div>)
}

export default MyPosts;