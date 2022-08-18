import React from 'react';
import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_content}>
                <h3>Contact: jiin.bae99@gmail.com</h3>
                <h3>Copyright ©2022 BaeJiIn All rights reserved.</h3>
                <a>Thanks for</a>
            </div>
        </div>
    );
}

export default Footer;