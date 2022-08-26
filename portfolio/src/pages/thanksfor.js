import React from 'react';
import styles from '../styles/thanksfor/thanksfor.module.css';

function ThanksFor() {
    return (
        <div id={styles.ThanksFor}>
            <h1>Thanks For</h1>
            <div id="thanks_for_img">
                <h2>{'<'}Images{'>'}</h2>
                <h3>- Freepik</h3>
                <ul>
                    <li><a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a></li>
                    <li><a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons">Css 3 icons created by Freepik - Flaticon</a></li>
                    <li><a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons">Nodejs icons created by Freepik - Flaticon</a></li>
                    <li><a href="https://www.flaticon.com/free-icons/mysql" title="mysql icons">Mysql icons created by Freepik - Flaticon</a></li>
                </ul>
                <h3>- Jason Long</h3>
                <ul>
                    <li><a href='https://git-scm.com/downloads/logos' title='git icons'>Git icons created by Jason Long</a></li>
                </ul>
                <h3>- Pixel perfect</h3>
                <ul>
                    <li><a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a></li>
                </ul>
                <h3>- Liblogo</h3>
                <ul>
                    <li><a href="https://www.liblogo.com/lib/sourcetree-logo.html" title="Sourcetree Logo">Sourcetree Logo - Liblogo</a></li>
                </ul>
                <h3>- Emile Perron</h3>
                <ul>
                    <li><a href="https://unsplash.com/photos/xrVDYZRGdw4" title='programming'>Top programming picture by Emile Perron</a></li>
                </ul>
            </div>
            <div id="thanks_for_font">
                <h2>{'<'}Fonts{'>'}</h2>
                <h3>- BcCard</h3>
                <ul>
                    <li><a href='https://paybooc.co.kr/app/paybooc/RPastEventDetail.do?evntNo=2020040025' title='paybooc Bold font'>paybooc-Bold created by BcCard</a></li>
                </ul>
                <h3>- GongGames</h3>
                <ul>
                    <li><a href='https://www.gonggames.com/#4thpage' title='gonggothic light font'>gonggothic light created by GongGames</a></li>
                </ul>
                <h3>- Naver</h3>
                <ul>
                    <li><a href='https://hangeul.naver.com/2017/nanum' title='nanumsquare font'>nanumsquare created by Naver</a></li>
                </ul>
            </div>
            <div id="thanks_for_openSource">
                <h2>{'<'}Open Source{'>'}</h2>
                <h3>- <a href='https://ko.reactjs.org/' title="react">Create React App</a></h3>
                <h3>- <a href='https://github.com/remix-run/react-router/tree/main/packages/react-router-dom' title="react router dom">
                    React Router Dom
                </a></h3>
                <h3>- <a href='https://github.com/leandrowd/react-responsive-carousel' title="carousel">React-Responsive-Carousel</a></h3>
            </div>
        </div>
        
    );
}

export default ThanksFor;