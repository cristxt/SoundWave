import React from 'react';
import './FeelTheMusicLayout.css';
import JoinButton from '../../Atoms/button/joinButton';
import Nav from '../../Molecules/nav';

const FeelTheMusicLayout = () => {
    return (
        <div className="feel-the-music">
            <Nav />
            <h1>Feel the Music</h1>
            <JoinButton />
        </div>
    );
}

export default FeelTheMusicLayout;
