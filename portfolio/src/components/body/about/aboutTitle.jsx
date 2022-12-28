import styles from '../../../styles/body/about.module.css';
import Fontstyle from '../../../styles/body/body.module.css';

function AboutTitle() {
    const titleFont = Fontstyle.bodyTitle;

    return (
        <div className={styles.about_title_container}>
            <div className={titleFont}>About me</div>
        </div>
    );
}

export default AboutTitle;