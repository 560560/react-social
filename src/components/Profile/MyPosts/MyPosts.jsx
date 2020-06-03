import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let postChange = () => {
    let messageText = newPostElement.current.value;
    props.postChange(messageText);
  }
  let addPost = () => {
    props.addPost ()
  }

  let postsElements = props.postsData.map(post => <Post key={post.id} id={post.id} message={post.message}
                                                              likesCount={post.likesCount}/>)
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea onChange={postChange}
                    ref={newPostElement}
                    value={props.postTextArea}
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