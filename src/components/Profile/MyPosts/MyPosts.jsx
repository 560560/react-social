import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreater, updateTextareaMyPostsDataActionCreater} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let postChange = () => {
    let messageText = newPostElement.current.value
    let action = updateTextareaMyPostsDataActionCreater(messageText);
    props.dispatch(action)
  }

  let addPost = () => {
    let action = addPostActionCreater();
    props.dispatch(action);
  }

  let postsElements = props.state.postsData.map(post => <Post id={post.id} message={post.message}
                                                              likesCount={post.likesCount}/>)

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea onChange={postChange}
                    ref={newPostElement}
                    value={props.state.postTextArea}
                    placeholder="Your post"/>
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