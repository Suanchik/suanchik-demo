import React, { useState } from 'react'; import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHook';

const ProfileData = (props) => {

    let [editMode, SetEditMode] = useState(false);

    let profile = props.profile;

    const showContacts = () => {
        SetEditMode(!editMode)
    }

    let socialContacts = [];

    for (let contact in profile.contacts) {
        socialContacts.push(<div><span className={classes.item}>{contact}</span>: {profile.contacts[contact]}</div>)
    };

    return (
        <div className={classes.userInfo}>
            {props.isOuner && <button onClick={props.editFormInfo} className={classes.editButton}>Редактировать</button>}
            <div>
                <div className={classes.userName}>{profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} upDataStatus={props.upDataStatus} /><hr />
            </div>
            <div>
                <div><span className={classes.item}>Обо мне: </span>{profile.aboutMe}</div>
            </div>
            <div>
                <hr />
                <div><span className={classes.contactsHead}>Контакты <button onClick={showContacts}>{!editMode ? "показать" : "скрыть"}</button></span></div>
                {
                    editMode ? socialContacts : ''
                }
            </div>
        </div>
    )
};


export default ProfileData

