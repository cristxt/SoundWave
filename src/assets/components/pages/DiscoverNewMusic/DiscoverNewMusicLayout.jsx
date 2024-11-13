import React from 'react';
import '../../pages/DiscoverNewMusic/DiscoverNewMusicLayout';
import Nav from '../../Molecules/nav';

const DiscoverNewMusicLayout = () => {
    return (
        <div className="DiscoverNewMusic">
            <Nav />
            <div className="container">
                <div className="left-container">
                    <h1 class="h1">Discover new music</h1>
                    <div className="icons">
                        <img src="src/assets/microphone.svg" alt="Music Icon" className="icon" />
                        <img src="src/assets/albums.svg" alt="Headphones Icon" className="icon" />
                        <img src="src/assets/more.svg" alt="Play Icon" className="icon" />
                    </div>
                    <p class="subheadline2">By joining you can benefit by listening to the latest albums released</p>
                </div>
                </div>
                <div className="right-container">
                <img src="src/assets/covers.jpg" className="music" />

                    
            </div>
        </div>
    );
}

export default DiscoverNewMusicLayout;