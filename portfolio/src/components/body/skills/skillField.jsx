import React from 'react';
import Fontstyle from '../../../styles/body/body.module.css';

function SkillField(props) {
    const skillField = props.skillField;
    const fontstyle = Fontstyle.bodyFont;

    return (
        <h2 className={fontstyle}>{skillField}</h2>
    );
}

export default SkillField;