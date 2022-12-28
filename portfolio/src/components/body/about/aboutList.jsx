import styles from '../../../styles/body/about.module.css';
import Fontstyle from '../../../styles/body/body.module.css';

function AboutList() {
    const fontstyle = Fontstyle.bodyFont;
    const aboutLists = [
        ['이름', '배지인'], 
        ['생년월일', '99.11.19'], 
        ['E-mail', 'jiin.bae99@gmail.com'],
        ['학력', '전북대학교 컴퓨터공학(2022.2 졸업 예정)'],
    ];

    const listItems = aboutLists.map((aboutList) => {
        return (
            <ol key={aboutList[0]} className={fontstyle}>{aboutList[0]}: {aboutList[1]}</ol>
        );
    });

    return(
        <ul className={styles.about_content}>
            {listItems}
        </ul>
    );  
}

export default AboutList;