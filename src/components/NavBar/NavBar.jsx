import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const Nav = () => {
    return (
        <nav className={classes.Nav}>
            <ul>
                <li><NavLink to="/Profile" activeClassName={classes.activeLink}><div className={classes.item}>Профиль</div></NavLink></li>
                <li><NavLink to="/Messenger" activeClassName={classes.activeLink}><div className={classes.item}>Сообщения</div></NavLink></li>
                <li><NavLink to="/People" activeClassName={classes.activeLink}><div className={classes.item}>Люди</div></NavLink></li>
                {/* <li><NavLink to="/News" activeClassName={classes.activeLink}><div className={classes.item}>Новости</div></NavLink></li>
                <li><NavLink to="/Music" activeClassName={classes.activeLink}><div className={classes.item}>Музыка</div></NavLink></li>
                <li><NavLink to="/Setting" activeClassName={classes.activeLink}><div className={classes.item}>Настройки</div></NavLink></li> */}
            </ul>
        </nav>
    )
};


export default Nav;