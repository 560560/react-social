import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
      <App state = {state} addPost={addPost}/>
    </React.StrictMode></BrowserRouter>,
    document.getElementById('root')
  );
}
