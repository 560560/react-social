import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let postChange = () => {
        let messageText = newPostElement.current.value
        let action = {key: "UPDATE-TEXTAREA-MY-POSTS-DATA", messageText: messageText};
        props.dispatch(action)
    }
    let addPost = () => {
        let action = {key: "ADD-POST"};
        props.dispatch(action);
    }
    let postsElements = props.state.postsData.map(post => <Post id={post.id} message={post.message}
                                                                likesCount={post.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={postChange} ref={newPostElement} value={props.state.postTextArea}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>)
}

export default MyPosts;