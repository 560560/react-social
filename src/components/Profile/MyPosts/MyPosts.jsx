import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 3, message: 'Yo!', likesCount: 5},
    {id: 4, message: 'Great job!', likesCount: 77}


]

let postsElements = postData
    .map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)

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
                {postsElements}
            </div>

        </div>)
}

export default MyPosts;