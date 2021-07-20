import React from 'react';
import Prilouder from '../../coummon/Prilouder/Prilouder';
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ava from '../../../assets/avaImg/mal2.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHook';
import { useParams } from 'react-router-dom';


const ProfileInfo = (props) => {

    let profile = props.profile;

    if (!props.profile) {
        return <Prilouder />
    }

    return (
        <div className={classes.profileInfo}>
            <div className={classes.AvaImg}>
                <img src={profile.photos.large ? profile.photos.large : ava} alt="" />
            </div>
            <div className={classes.userInfo}>
                <div>
                    <div className={classes.userName}>{profile.fullName}</div>
                    <ProfileStatusWithHooks status={props.status} upDataStatus={props.upDataStatus} /><hr />
                </div>
                <div>
                    <div><span>Обо мне: </span>{profile.aboutMe}</div>
                </div>
                <div>
                    <div><span className={classes.item}>Kонтакты:</span></div>
                    <div> <span className={classes.item}>Facebook:</span> {profile.contacts.facebook}</div>
                    <div> <span className={classes.item}>ВК:</span> {profile.contacts.vk}</div>
                    <div> <span className={classes.item}>Twitter:</span> {profile.contacts.twitter}</div>
                    <div> <span className={classes.item}>Instagrem:</span> {profile.contacts.instagram}</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;

