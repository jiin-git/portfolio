import React from 'react';
import Top from './top/top';
import About from './about/about';
import Skills from './skills/skills';
import Project from './project/project';
import styles from './body.module.css';

function Body() {
    return (
        <div className={styles.body_container}>
            <Top/>
            <About/>
            <Skills/>
            <Project/>
        </div>
    );
}

export default Body;