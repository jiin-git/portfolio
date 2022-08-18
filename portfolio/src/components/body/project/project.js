import React from 'react';
import styles from './project.module.css';
import Fontstyle from '../body.module.css';

function Project() {
    const fontstyle = Fontstyle.bodyFont;
    return (
        <div className={styles.project}>
            <div className={[styles.project_title, fontstyle].join(" ")}>
                Project
            </div>
            <div className={styles.project_contents}>
                <div className={styles.project_content}>
                    
                </div>
            </div>
        </div>
    );
}

export default Project;