import React from 'react';
import styles from './header.module.css';

function GroupNavigation() {
    return(
        <nav className={styles.group_nav}>
            <a id='about'>About</a>
            <a id='skills'>Skills</a>
            <a id='project'>Project</a>
        </nav>
    );
}

export default GroupNavigation;