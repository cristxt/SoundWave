import React from 'react';
import './nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-left">
                <img src="src/assets/logo.png" alt="Logo" className="logo" />
                <span className="brand-name">soundwave</span>
            </div>
            <div className="nav-right">
                <a href="/discover" className="nav-link">discover</a>
                <a href="/join" className="nav-link">join</a>
            </div>
        </nav>
    );
};

export default Nav;