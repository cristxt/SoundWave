import React from 'react';
import '../../pages/DiscoverNewMusic/DiscoverNewMusicLayout';
import Nav from '../../Molecules/nav';
import '../DiscoverNewMusic/DiscoverNewMusicLayout.css';
import Footer from '../../Molecules/footer';


const DiscoverNewMusicLayout = () => {
    return (
        <div className="DiscoverNewMusic">
            <Nav />
            <div className="container2">
                <div className="left-container2">
                    <h1 className="h12">Discover new music</h1>
                    <div className="icons">
                        <div className="primer-cuadrado">
                        <img src="src/assets/microphone.svg" alt="Music Icon" className="icon" />
                        <p>charts</p>
                        </div>
                        <div className="segundo-cuadrado">
                        <img src="src/assets/albums.svg" alt="Headphones Icon" className="icon" />
                        <p>albums</p>
                        </div>
                        <div className="tercer-cuadrado">
                        <img src="src/assets/more.svg" alt="Play Icon" className="icon" />
                        <p>more</p>
                        </div>

                    </div>
                    <p className="subheadline2">By joining you can benefit by listening to the latest albums released</p>
                    </div>
                <div className="right-container2">
                    <img src="src/assets/covers.jpg" className="music" />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DiscoverNewMusicLayout;
