import React from 'react';
// import cookHatIcon from '../assets/mdi_cook.svg';
import { Link } from 'react-router-dom';
import TopSlideCard from "../components/TopSlideCard";
import styles from '../styles/Home.module.css';
import SubmitBtn from '../components/SubmitBtn.jsx';
import MonthlyTheme from '../components/MonthlyTheme.jsx';
import kvTitle from "../assets/top-kv-title.svg";
import spBgImg from "../assets/top-bg-pc.svg";

function Home() {



  return (
    <div className={styles["top"]}>
      <div className={styles["top-kv"]}>
        <h1 className={`${styles["top-kv-h1"]} container`}><img src={kvTitle} alt="ママの笑顔がおいしさの秘訣" /></h1>
      </div>
      <div className={styles["kv-intro"]}>
        <h2>なぜ、ママの笑顔が大事か</h2>
        <p>献立の悩みや時間に追われるストレスは、<br />家庭内の空気をピリつかせます<br />ママの笑顔は、<wbr />家族の幸せを動かす<wbr />「最高のスイッチ」です<br />私たちが時短にこだわるのは、<br />ママに心のゆとりと達成感を<wbr />取り戻してほしいからです</p>
      </div>
      <div className={styles["top-everyonerecipe-preview"]}>
        <img src={spBgImg} alt="" />
        <div className='container'>
          <h1>みんなの時短レシピ</h1>
          <p>忙しいママたちが<br />シェアする時短レシピで、<br />短時間で家族に美味しい<br />笑顔を届けましょう。</p>
          <TopSlideCard />
          <Link to="/jitanrecipe"><button type='button' className={`${styles["rank-btn"]} button`}>ランキングレシピをみる</button></Link>
        </div>
      </div>
      <SubmitBtn />
      <MonthlyTheme />
    </div>

  );
};

export default Home;