import React from 'react';
import TopImg from './topImg';
import styles from './top.module.css';

function Top() {
    return (
        <div className='top_container'>
            <TopImg/>
            <Introduce/>
        </div>
    );
}

function Introduce() {
    return (
        <div id={styles.introduce}>
            배지인의 포트폴리오
        </div>
    );
}

export default Top;