import React from 'react';
import styles from '../styles/MonthlyTheme.module.css';
import forkIcon from '../assets/fork-icon.svg';
import spoonIcon from '../assets/spoon-icon.svg';



const MonthlyTheme = () => {
    const now = new Date();
    const nowMonth = now.getMonth() + 1;
    return (
        <div>
            <div className={styles["theme-container"]}>
                <h2 className={styles["theme-h2"]}><img src={forkIcon} alt="フォークアイコン" />{nowMonth}月のテーマ<img src={spoonIcon} alt="スプーンアイコン" /></h2>
                <h2 className={styles["theme-thisMonthTheme"]}>鶏&emsp;X&emsp;キッコーマン醬油<div className={styles["theme-dressingUnderline"]}></div></h2>
                <p className={styles["theme-text"]}>鶏肉は、忙しいママの強い味方！<wbr />短時間で火が通りやすく、<br />家族みんなが喜ぶ定番食材です。<br />今月は、この鶏肉とキッコーマン醤油を組み合わせた<br />「みんなの時短レシピ」を大募集します</p>
            </div>
            <p>あなただけのアイデアで、いつもの料理をランクアップさせ、<br />コミュニティで達成感を分かち合いましょう！</p>
        </div>
    )
}

export default MonthlyTheme;