import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logitype from '../../assets/avaImg/suanchik.jpg'


const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src={logitype} alt="suanchik" />
            {props.isAuth ? <div className={classes.logBlock}> <button onClick={props.LogOut}>Выйти</button></div> : <NavLink to={`/Login`}><div className={classes.logBlock}>Войти</div></NavLink>}
        </header>
    )
};


export default Header;