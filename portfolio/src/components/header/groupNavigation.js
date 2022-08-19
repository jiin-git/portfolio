import React from 'react';
import styles from './header.module.css';
import Navigation from './navigation';

function GroupNavigation() {
    return(
        <nav className={styles.group_nav}>
            <Navigation/>
        </nav>
    );
}

export default GroupNavigation;