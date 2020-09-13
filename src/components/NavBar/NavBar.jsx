import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './NavBar.module.css';

const Navbar = () => {
    return (
        <nav className={nav.nav}>
            <div>
                <NavLink to="/profile" className={nav.item} activeClassName={nav.ActiveLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={nav.item} activeClassName={nav.ActiveLink}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={nav.item} activeClassName={nav.ActiveLink}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={nav.item} activeClassName={nav.ActiveLink}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={nav.item} activeClassName={nav.ActiveLink}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default Navbar;