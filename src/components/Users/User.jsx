import React from 'react';
import classes from './Users.module.css';
import ava from '../../assets/avaImg/mal2.jpg';
import { NavLink } from 'react-router-dom';

function User(props) {
    let u = props.user;
    return (
        <div className={classes.users}>
            <div>
                <NavLink to={`/Profile/` + u.id}><img src={!u.photos.large ? ava : u.photos.large} alt="" /></NavLink>
            </div>
            <div>
                <span>
                    {u.name}
                </span>
            </div>
            <div>
                <div>
                    {
                        u.followed ? <button disabled={props.toggalIsFollowing.some(id => id === u.id)} onClick={() => { props.UnFollowThunkCreater(u.id) }} className={classes.unfollowColor}>Отписаться</button>
                            : <button disabled={props.toggalIsFollowing.some(id => id === u.id)} onClick={() => { props.FollowThunkCreater(u.id) }}>Подписаться</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default User;
