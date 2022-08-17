import React from 'react';
import HeaderTitle from './headerTitle';
import GroupNavigation from './groupNavigation';
import styles from './header.module.css';

function HeaderContent() {
    return (
        <div className={styles.header_container}>
            <HeaderTitle/>
            <GroupNavigation/>
        </div>
    );
}

export default HeaderContent;