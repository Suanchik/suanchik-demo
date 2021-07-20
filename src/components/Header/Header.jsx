import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'


const Header = (props) => {
    return (
        <header className={classes.header}>
            <h1>Suanchik</h1>
            {props.isAuth ? <div className={classes.logBlock}> <button onClick={props.LogOut}>Выйти</button></div> : <NavLink to={`/Login`}><div className={classes.logBlock}>Войти</div></NavLink>}
        </header>
    )
};


export default Header;