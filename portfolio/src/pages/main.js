import React from 'react';
import '../styles/index.css';
import Header from '../components/header/header';
import Body from '../components/body/body';
import Footer from '../components/footer/footer';

function Main() {
    return (
        <div id='main'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default Main;