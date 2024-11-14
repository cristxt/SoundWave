import React from 'react';
import '../../pages/JoinTheFun/JoinTheFunLayout.css';
import Nav from '../../Molecules/nav';
import Form from '../../Molecules/form';
import Footer from '../../Molecules/footer';

const JoinTheFunLayout = () => {
    return (
        <div className="join-the-fun">
            <Nav />
            <div className="container3">
            <div className="circle3"></div>
            <div className="circle4"></div>
            <div className="left-container3">
                <h1 class="h13">Join The <span class="color">fun.</span></h1>
            </div>
            <div className="right-container3">
            <Form/> 
            </div>
            </div>
            <Footer/>
        </div>
    );
}

export default JoinTheFunLayout;