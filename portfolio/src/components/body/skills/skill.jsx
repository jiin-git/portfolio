import React, {useState, useEffect} from 'react';

function Skill(props) {
    const skill = props.skill;
    const [skillImg, setSkillImg] = useState(null);

    useEffect(() => {
        setSkillImg(require(`../../../assets/img/${skill}.png`));
    }, []);

    return (
        <img src={skillImg} alt={skill}/>
    );
}

export default Skill;