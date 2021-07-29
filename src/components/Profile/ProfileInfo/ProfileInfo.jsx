import React, { useState } from 'react';
import Prilouder from '../../coummon/Prilouder/Prilouder';
import classes from './ProfileInfo.module.css'
import ava from '../../../assets/avaImg/mal2.jpg';
import ProfileDataForm from './profileDataForm';
import ProfileData from './profileData';


const ProfileInfo = (props) => {

    let [editForm, SetEditForm] = useState(false);

    const editFormInfo = () => {
        SetEditForm(!editForm)
    }

    let profile = props.profile;

    if (!props.profile) {
        return <Prilouder />
    }

    const mainPhoto = (e) => {
        if (e.target.files.length) {
            props.saveFile(e.target.files[0]);
        }
    }

    return (
        <div className={classes.profileInfo}>
            <div className={classes.AvaImg}>
                <img src={profile.photos.large ? profile.photos.large : ava} alt="" />
                <div>
                    {props.isOuner && <input type="file" onChange={(e) => mainPhoto(e)} />}
                </div>
            </div>

            {editForm ? <ProfileDataForm editFormInfo={editFormInfo} /> : <ProfileData {...props} editFormInfo={editFormInfo} isOuner={props.isOuner} />}

        </div>
    )
};

export default ProfileInfo;

