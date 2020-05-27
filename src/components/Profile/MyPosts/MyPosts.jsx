import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);

  }

  let postsElements = props.postsData.map(post => <Post id={post.id} message={post.message}
                                                        likesCount={post.likesCount}/>)
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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