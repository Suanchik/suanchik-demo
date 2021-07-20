import React from 'react';
import classes from './Posts.module.css';
import ava from '../../assets/avaImg/mal2.jpg';

const Posts = (props) => {

    return (
        <div className={classes.Posts}>
            <div className={classes.PostImg}>
                <img src={ava} />
                <div>
                    {props.likes}
                </div>
                <button onClick={() => props.deletePost(props.id)}>удалить пост</button>
            </div>
            <div className={classes.postMessage}>
                {props.message}
            </div>
        </div>

    )
};

export default Posts;
