import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/FooterCard2.css';
import styles from '../styles/FooterCard2.module.css';



function FooterCard2({ imgSrc, title, description }) {
    const linkToHomeCooking = () => {
        window.open("https://www.kikkoman.co.jp/homecook/", "_blank");
    };

    return (
        <div className={`${styles.card} shadow`} onClick={linkToHomeCooking}>
                <div className={styles['card-top']} style={{ backgroundImage: `url(${imgSrc})` }}>
                    <button type='button' className={styles.arrow}><svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
                        <path d="M15.1699 2.25L26.2441 13.3242L15.1699 24.3984M24.7061 13.3242H2.25" stroke="white" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                </div>
                <div className={styles['card-body']}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
        </div>
    );
}

export default FooterCard2;
