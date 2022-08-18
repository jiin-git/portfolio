import React from 'react';
import styles from './about.module.css';
import Fontstyle from '../body.module.css';

function About() {
    const fontstyle = Fontstyle.bodyFont;
    return (
        <div className={styles.about}>
            <div className={styles.about_title_container}>
                <div className={[styles.about_title, fontstyle].join(" ")}>About me</div>
            </div>
            <ul className={styles.about_content}>
                <ol className={fontstyle}>이름: 배지인</ol>
                <ol className={fontstyle}>생년월일: 99.11.19</ol>
                <ol className={fontstyle}>E-mail: jiin.bae99@gmail.com</ol>
                <ol className={fontstyle}>학력: 전북대학교 컴퓨터공학부(2022.2 졸업 예정)</ol>
            </ul>
        </div>
    );
}

export default About;