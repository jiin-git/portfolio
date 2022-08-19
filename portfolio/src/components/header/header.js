import React from 'react';
import HeaderTitle from './headerTitle';
import GroupNavigation from './groupNavigation';
import styles from './header.module.css';

function Header() {
    return (
        <div className={styles.header_container}>
            <HeaderTitle/>
            <GroupNavigation/>
        </div>
    );
}

export default Header;