import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import styles from '../../../styles/body/project.module.css';
import Fontstyle from '../../../styles/body/body.module.css';
import {Carousel} from 'react-responsive-carousel';
import MovieImg from '../../../assets/img/movie_project.png';

function Project() {
    const titleFont = Fontstyle.bodyTitle;
    return (
        <div id='project' className={styles.project}>
            <div className={titleFont}>
                Project
            </div>
            <div className={styles.project_contents}>
                <div className={styles.project_contents_container}>
                    {/* <div className={styles.project_descriptions}>
                        <h2>프로젝트 명: </h2>
                        https://jiin-git.github.io/movieWebService/
                    </div> */}
                    <a href="https://jiin-git.github.io/movieWebService/" target="_blank">
                        <img className={styles.project_img} src={MovieImg} alt="Movie"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;