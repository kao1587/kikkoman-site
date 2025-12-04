import React from 'react';
import styles from '../styles/RecipeCard.module.css';

const RecipeCard = ({ imgSrc, title, content }) => {
    return (
        <div>
            <div className={`${styles["recipe-card"]} shadow`}>
                <div className={styles["recipe-card-top"]} style={{ backgroundImage: `url(${imgSrc})` }}></div>
                <div className={styles["recipe-card-body"]}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
};

export default RecipeCard;