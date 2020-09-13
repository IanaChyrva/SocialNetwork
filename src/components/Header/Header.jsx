import React from 'react';
import head from './Header.module.css';

const Header = () => {
    return (
        <header className={head.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png" alt="" />
        </header>
    )
};

export default Header;