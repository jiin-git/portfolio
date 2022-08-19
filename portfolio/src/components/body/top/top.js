import React from 'react';
import TopImg from './topImg';
import Introduce from './introduce';
import styles from './top.module.css';

function Top() {
    return (
        <div className={styles.top_container}>
            <TopImg/>
            <Introduce/>
        </div>
    );
}

export default Top;