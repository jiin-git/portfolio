import React from 'react';
import Fontstyle from '../body.module.css';

function SkillField(props) {
    const skillField = props.skillField;
    const fontstyle = Fontstyle.bodyFont;

    return (
        <h2 className={fontstyle}>{skillField}</h2>
    );
}

export default SkillField;