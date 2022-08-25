import React from 'react';
import styles from '../../../styles/body/skills.module.css';
import Skill from './skill';

function SkillList(props) {
    const skillLists = props.skillLists;
    const listItems = skillLists.map((skill) => {
        return <Skill skill={skill} key={skill}/>;
    });

    return (
        <div className={styles.skill_list_content}>
            {listItems}
        </div>
    );
}

export default SkillList;