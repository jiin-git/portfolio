import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/footer/footer.module.css';

function Footer() {
    // useEffect(() => {
    //     document.title = "Thanks For";
    // },[]);

    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_content}>
                <h3>Contact: jiin.bae99@gmail.com</h3>
                <h3>Copyright ©2022 BaeJiIn All rights reserved.</h3>
                <Link to="/thanksfor">Thanks for</Link>
            </div>
        </div>
    );
}

export default Footer;