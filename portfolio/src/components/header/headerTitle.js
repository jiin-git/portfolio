import React from 'react';
import styles from './header.module.css';

function HeaderTitle() {
    return (
        <div className={styles.header_title_container}>
            <a className={styles.header_title}>Jiin's Portfolio</a>
        </div>
    );
}

export default HeaderTitle;