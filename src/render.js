import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost, updateTextareaMyPostsData, sendMessage, updateTextareaMessages} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}
             addPost={addPost}
             updateTextareaMyPostsData={updateTextareaMyPostsData}
             sendMessage={sendMessage}
             updateTextareaMessages={updateTextareaMessages}/>
      </React.StrictMode></BrowserRouter>,
    document.getElementById('root')
  );
}
