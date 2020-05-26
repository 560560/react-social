import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <div>
        <img src="http://9878621572.myjino.ru/img/ava_6.jpg"/>
        {props.message}
        <div>
          <span>{props.likesCount}</span>
        </div>

      </div>
    </div>)
}

export default Post;