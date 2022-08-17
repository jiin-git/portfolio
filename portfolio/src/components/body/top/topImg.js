import React from 'react';
import styles from './top.module.css';

function TopImg() {
    return(
        <div className={styles.img_container}>
            <img src={require('./programming.jpg')}/>
        </div>
    );
}

export default TopImg;