import React, {useState, useEffect} from 'react';
import styles from './skills.module.css';
import Fontstyle from '../body.module.css';
import SkillField from './skillField';
import SkillList from './skillList';

function Skills() {
    const fontstyle = Fontstyle.bodyFont;
    const skillsLists = [
        ['Frontend', ['html5', 'css3', 'js', 'react']],
        ['Backend', ['nodejs']],
        ['Database', ['mysql']],
        ['Version Control', ['git', 'github', 'sourcetree']],
    ];
    const skillContents = skillsLists.map((skill, idx) => {
        return (
            <div className={styles.skill_content_container} key={skill[0]}>
                <SkillField skillField={skill[0]}/>
                <SkillList skillLists={skill[1]}/>
            </div>
        );
    })

    return (
        <div id='skills' className={styles.skills}>
            <div className={[styles.skills_title, fontstyle].join(" ")}>
                Skills            
            </div>
            <div className={styles.skills_content}>
                {skillContents}
            </div>
        </div>
    );
}

export default Skills;