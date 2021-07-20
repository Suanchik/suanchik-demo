import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Messenger.module.css';


const MessagesList = (props) => {
    return(
        <div className={classes.item}>
           <div>
                <NavLink to={`/Messenger/`+ props.id} activeClassName={classes.active} ><div>{props.img}{props.dialogList}</div></NavLink>
           </div>
        </div>
    )
};

export default MessagesList;