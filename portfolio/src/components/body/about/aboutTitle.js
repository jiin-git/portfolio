import React from 'react';
import styles from './about.module.css';
import Fontstyle from '../body.module.css';

function AboutTitle() {
    const fontstyle = Fontstyle.bodyFont;

    return (
        <div className={styles.about_title_container}>
            <div className={[styles.about_title, fontstyle].join(" ")}>About me</div>
        </div>
    );
}

export default AboutTitle;