import React from 'react';
import Dialog from './Dialog';
import MessagesList from './MessagesList';
import classes from './Messenger.module.css'
import ava from '../../assets/avaImg/mal.jpg'
import { Field, reduxForm } from 'redux-form';
import { Form, Textarea } from '../coummon/Prilouder/formControls/formControls';
import { maxLengthCreator, required } from '../../Utils/validator/validator';


const Messenger = (props) => {

    let dialog = props.dialog;
    let messagesList = props.messagesList;
    let addMessageC = props.addMessageC

    let dialogData = dialog.map(d => <Dialog id={d.id} message={d.message}/>);
    let messagesData = messagesList.map(m => <MessagesList id={m.id} dialogList={m.dialogname} img={<img src={!m.img ? ava: m.img}/>}/>)

    let addMessages = (value) => {
        addMessageC(value.messageBody)
    }

 
    return (
    <div className={classes.Dialogs}>
        <div className={classes.messagelist}>
            {messagesData}
        </div>
        <div className={classes.dialog}>
            <div className={classes.dialog2}>
                {dialogData}
                {/* <div className={classes.textareaButton}> 
                    <div><textarea cols="70" rows="3" onChange={addMessageLetter} ref={newRefValue} value={newMLetter} placeholder="Напишите ваше сообщние ..."></textarea></div>
                    <div><button onClick={addMessage} disabled={!newMLetter ? true: false}>Отправить</button></div>
                </div> */}
                <AddMessageReduxForm onSubmit={addMessages}/>
            </div>
        </div>
    </div>
    )
};

const maxLength50 = maxLengthCreator(10);

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.textareaButton}> 
                        <div><Field component={Textarea} placeholder="Напишите ваше сообщние ..." name="messageBody" validate={[required, maxLength50, ]}/></div>
                        <div><button>Отправить</button></div>
            </div>
        </form>

    )
};

const AddMessageReduxForm = reduxForm({form: "messenger"})(addMessageForm);

export default Messenger;