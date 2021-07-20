import React from 'react';
import classes from './Messenger.module.css'

const Dialog = (props) => {
    
    return (
        <div className={classes.itemD}>
            <div className={classes.dialogMessage}>
                    <div><span>{props.message}</span></div>
            </div>
        </div>
    )
};
;
export default Dialog;