import React from 'react';
import s from './Post.module.css';

const Post = ({message, likesCount}) => {

  return (
    <div className={s.item}>
      <div>
        <img src="https://social.reactlearning.ru/img/ava_6.jpg" alt=""/>
        {message}
        <div>
          <span>{likesCount}</span>
        </div>

      </div>
    </div>)
}

export default Post;