import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreater, updateTextareaMyPostsDataActionCreater} from "../../../redux/profile-reducer";


const MyPostsContainer = (props) => {

  let state = props.store.getState();
  let postChange = (messageText) => {
    let action = updateTextareaMyPostsDataActionCreater(messageText);
    props.store.dispatch(action)
  }
  let addPost = () => {
    let action = addPostActionCreater();
    props.store.dispatch(action);
  }

  return (
    <MyPosts postTextArea={state.profilePage.postTextArea}
             postsData={state.profilePage.postsData}
             postChange={postChange}
             addPost={addPost}/>
  )
}

export default MyPostsContainer;