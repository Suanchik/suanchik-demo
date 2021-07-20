import React, { useEffect, useState } from 'react';
import classes from './ProfileInfo.module.css'



const ProfileStatusWithHooks = (props) => {

    let [editMode, SetEditMode] = useState(false);
    let [status, SetStatus] = useState(props.status);
   
    useEffect(() => {
        SetStatus(props.status);
    }, [props.status])

    let activeEditMode = () => {
        SetEditMode(true)
    }
    let deactiveEditMode = () => {
        SetEditMode(false)
        props.upDataStatus(status)
    }
    let onStatusChange = (e) => {
        SetStatus(e.currentTarget.value);
    }
        return (
            <div>
                {!editMode && <div>
                    <span className={classes.status} onDoubleClick={activeEditMode}>{props.status || '===='}</span>
                </div>} 
                {editMode && <div>
                    <input autoFocus={true} onChange={onStatusChange} onBlur={deactiveEditMode} value={status}/>
                </div>}
            </div>
        )
};

export default ProfileStatusWithHooks;