import React from 'react';
import styles from '../../../styles/body/top.module.css';

function TopImg() {
    return(
        <div className={styles.img_container}>
            <img src={require('../../../assets/img/programming.jpg')} alt="programming"/>
        </div>
    );
}

export default TopImg;