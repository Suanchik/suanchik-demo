import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileDataForm = (props) => {

    return (
        <form className={classes.userInfo}>
            {/* {props.isOuner && <button onClick={props.editFormInfo} className={classes.editButton}>Редактировать</button>}
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
            </div> */}
            <button onClick={props.editFormInfo}>Сохранить</button>
        </form>
    )
}


export default ProfileDataForm;
