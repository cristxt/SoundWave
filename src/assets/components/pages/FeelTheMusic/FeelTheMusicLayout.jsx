import React from 'react';
import '../../pages/FeelTheMusic/FeelTheMusicLayout.css';
import JoinButton from '../../Atoms/button/joinButton';
import Nav from '../../Molecules/nav';

const FeelTheMusicLayout = () => {
    return (
        <div className="feel-the-music">
            <Nav />
            <div className="container">
            <div className="circle1"></div>
            <div className="circle2"></div>
                <div className="left-container">
                <img src="src/assets/landing-page-girl.png" className="girl" />
                </div>
                <div className="right-container">
                    <h1>Feel the Music</h1>
                    <p class="subheadline">Stream over 20 thousand songs with one click</p>
                    <JoinButton />
                </div>
            </div>
        </div>
    );
}

export default FeelTheMusicLayout;