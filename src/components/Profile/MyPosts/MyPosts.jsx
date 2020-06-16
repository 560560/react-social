import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPostReduxForm from "../AddPostForm/AddPostForm";



const MyPosts = (props) => {
  let addPost = (formData) => {
    props.addPost (formData.postText)
  }

  let postsElements = props.postsData.map(post => <Post key={post.id} id={post.id} message={post.message}
                                                              likesCount={post.likesCount}/>)
  return (
    <div className={s.postsBlock}>
      My posts
      <AddPostReduxForm onSubmit={addPost} />
      <div className={s.posts}>
        {postsElements}
      </div>

    </div>)
}

export default MyPosts;