import React from 'react';
import cookHatIcon from '../assets/mdi_cook.svg';
import TopSlideCard from "../components/TopSlideCard";
import styles from '../styles/Home.module.css';
import SubmitBtn from '../components/SubmitBtn.jsx';

function Home() {
  return (
    <div className={styles["top"]}>
      <div className={`${styles["top-container"]} container`}>
        <h1>みんなの時短レシピ</h1>
        <div className={styles["title-description"]}>
          <img src={cookHatIcon} alt="Fast & Deliciousアイコン" />
          <p>Fast & Delicious</p>
        </div>
        <TopSlideCard />
        <p className={styles["top-description"]}>ママの笑顔が、おいしさの秘訣！<br />忙しいママたちがシェアする時短レシピで、<br />短時間で家族に美味しい笑顔を<wbr />届けましょう。</p>
      </div>
      <SubmitBtn />
    </div>

  );
};

export default Home;