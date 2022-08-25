import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styles from '../../../styles/body/project.module.css';
import Fontstyle from '../../../styles/body/body.module.css';
import {Carousel} from 'react-responsive-carousel';
import Css from '../../../assets/img/css3.png';

function Project() {
    const titleFont = Fontstyle.bodyTitle;
    return (
        <div id='project' className={styles.project}>
            <div className={titleFont}>
                Project
            </div>
            <div className={styles.project_contents}>
                <div className={styles.project_content}>
                    <Carousel id={styles.carousel}>
                        <div className={styles.carousel_img_container}>
                            <img src={Css} alt="css"/>
                        </div>
                        <div className={styles.carousel_img_container}>
                            <img src={Css} alt="css"/>
                        </div>
                        <div className={styles.carousel_img_container}>
                            <img src={Css} alt="css"/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Project;