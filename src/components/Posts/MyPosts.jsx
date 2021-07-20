import React, { createRef } from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../Utils/validator/validator';
import { Textarea } from '../coummon/Prilouder/formControls/formControls';
import classes from './MyPosts.module.css';
import Posts from './Posts';




const MyPosts = React.memo((props) => {

    let posts = props.posts;
    let addPostC = props.addPostC;

    let addPostBody = (value) => {
        addPostC(value.postBody)
    }


    let postsData = [...posts].reverse().map(p => <Posts message={p.message} likes={p.likes} id={p.id} deletePost={props.deletePost} />)

    return (
        <div className={classes.MyPosts}>
            <div>
                <h2>
                    мои посты
                </h2>
                <AddPostReduxForm onSubmit={addPostBody} />
            </div>
            <div className={classes.Post}>
                {postsData}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.textareaButton}>
                <div><Field component={Textarea} placeholder="Напишите свой пост..." name="postBody" validate={[required, maxLength10,]} /></div>
                <div><button>Опубликовать</button></div>
            </div>
        </form>

    )
};

const AddPostReduxForm = reduxForm({ form: "messenger" })(addPostForm);



export default MyPosts;