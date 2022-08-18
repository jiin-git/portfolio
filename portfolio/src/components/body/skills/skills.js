import React from 'react';
import styles from './skills.module.css';
import Fontstyle from '../body.module.css';

function Skills() {
    const fontstyle = Fontstyle.bodyFont;
    return (
        <div className={styles.skills}>
            <div className={[styles.skills_title, fontstyle].join(" ")}>
                Skills            
            </div>
            <div className={styles.skills_content}>
                <div className={styles.frontend}>
                    <h2 className={fontstyle}>Frontend</h2>
                    <div className={styles.skill_list_content}>
                        <img src={require('./html5.png')} alt='htmllogo'/>
                        {/* <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a> */}
                        <img src={require('./css3.png')} alt='csslogo'/>
                        {/* <a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons">Css 3 icons created by Freepik - Flaticon</a> */}
                        <img src={require('./js.png')} alt='jslogo'/>
                        <img src={require('./react.png')} alt='reactlogo'/>
                    </div>
                </div>
                <div className={styles.backend}>
                    <h2 className={fontstyle}>Backend</h2>
                    <div className={styles.skill_list_content}>
                        <img src={require('./nodejs.png')} alt='nodejslogo'/>
                        {/* <a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons">Nodejs icons created by Freepik - Flaticon</a> */}
                    </div>
                </div>
                <div className={styles.database}>
                    <h2 className={fontstyle}>Database</h2>
                    <div className={styles.skill_list_content}>
                        <img src={require('./mysql.png')} alt='mysqllogo'/>
                        {/* <a href="https://www.flaticon.com/free-icons/mysql" title="mysql icons">Mysql icons created by Freepik - Flaticon</a> */}
                    </div>
                </div>
                <div className={styles.version_control}>
                    <h2 className={fontstyle}>Version Control</h2>
                    <div className={styles.skill_list_content}>
                        <img src={require('./git.png')} alt='gitlogo'/>
                        {/* Git Logo by Jason Long  */}
                        <img src={require('./github.png')} alt='githublogo'/>
                        {/* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a> */}
                        <img src={require('./sourcetree.png')} alt='sourcetreelogo'/>
                        {/* <a href="https://www.liblogo.com/lib/sourcetree-logo.html" title="Sourcetree Logo">Sourcetree Logo</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;