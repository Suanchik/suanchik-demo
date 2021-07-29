import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile}
                status={props.status}
                upDataStatus={props.upDataStatus}
                toggalIsFollowing={props.toggalIsFollowing}
                isOuner={props.isOuner}
                saveFile={props.saveFile}
            />
        </div>
    )
};


export default Profile;