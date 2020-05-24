import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from "./components/Profile/MyPosts/Post/Post";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";


let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 20},
    {id: 3, message: 'Yo!', likesCount: 5}
]
let dialogsData = [
    {id: 1, name: "Anton"},
    {id: 2, name: "Elena"},
    {id: 3, name: "Mihail"},
    {id: 4, name: "Kseniya"}
]
let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "How is your IT-KAMASUTRA?"},
    {id: 4, message: "Best Regards!"}
]

ReactDOM.render(
    <React.StrictMode>
        <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
