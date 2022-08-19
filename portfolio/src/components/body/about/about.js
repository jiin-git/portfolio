import React from 'react';
import styles from './about.module.css';
import AboutTitle from './aboutTitle';
import AboutList from './aboutList';

function About() {
    return (
        <div id='about' className={styles.about}>
            <AboutTitle/>
            <AboutList/>
        </div>
    );
}

export default About;