import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Jitanrecipe.module.css';
import { Link } from 'react-router-dom';
import SubmitBtn from "../components/SubmitBtn";
import cookIconOrange from '../assets/orange-fluent_spatula-spoon-16-filled.svg';
import forwardArrowIcon from "../assets/forward-arrow-icon.svg";
// import jitanrecipeInroBgSp from "../assets/jitanrecipe-intro-bg-sp.svg";
import gradientBgy from "../assets/top-kv-intro.png";
import gradientBgo from "../assets/orange-gradient.png";
import RecipeCard from "../components/RecipeCard.jsx";
import recipeImg1 from '../assets/dish-img.jpeg';
import recipeImg2 from '../assets/dish-img2.jpg';


function Jitanrecipe() {
  const prevMonth = new Date().getMonth() === 0 ? 12 : new Date().getMonth();

  const RecipeCardsInfo = [
    {
      imgSrc: recipeImg1,
      title: "【時短30分】息子が満面の笑み！お肉たっぷり絶品カレー",
      content: "忙しい日でも、手作りの味を諦めない」を叶えるレシピ。キッコーマンのいつでも新鮮 旨み広がる だししょうゆで、短時間なのに味が本格的。"
    },
    {
      imgSrc: recipeImg2,
      title: "【週末チャレンジ】子どもと一緒に作る！ワクワク醤油おにぎり",
      content: "隙間時間に見て、週末に挑戦！家族みんなで作る時間は、最高の「おいしい記憶」です。キッコーマンのいつでも新鮮 旨み広がる だししょうゆがあれば、失敗知らずで、親子でハッピーに！"
    },
    {
      imgSrc: recipeImg1,
      title: "【時短30分】息子が満面の笑み！お肉たっぷり絶品カレー",
      content: "忙しい日でも、手作りの味を諦めない」を叶えるレシピ。キッコーマンのいつでも新鮮 旨み広がる だししょうゆで、短時間なのに味が本格的。"
    },
    {
      imgSrc: recipeImg2,
      title: "【週末チャレンジ】子どもと一緒に作る！ワクワク醤油おにぎり",
      content: "隙間時間に見て、週末に挑戦！家族みんなで作る時間は、最高の「おいしい記憶」です。キッコーマンのいつでも新鮮 旨み広がる だししょうゆがあれば、失敗知らずで、親子でハッピーに！"
    },
    {
      imgSrc: recipeImg2,
      title: "【週末チャレンジ】子どもと一緒に作る！ワクワク醤油おにぎり",
      content: "隙間時間に見て、週末に挑戦！家族みんなで作る時間は、最高の「おいしい記憶」です。キッコーマンのいつでも新鮮 旨み広がる だししょうゆがあれば、失敗知らずで、親子で親子でハッピーに！"
    },
    {
      imgSrc: recipeImg2,
      title: "【週末チャレンジ】子どもと一緒に作る！ワクワク醤油おにぎり",
      content: "隙間時間に見て、週末に挑戦！家族みんなで作る時間は、最高の「おいしい記憶」です。キッコーマンのいつでも新鮮 旨み広がる だししょうゆがあれば、失敗知らずで、親子でハッピーに！"
    },
  ];
  const itemLoad = 4;
  const recipeCount = RecipeCardsInfo.length;
  const [visibleCount, setVisibleCount] = useState(itemLoad);
  const recipesToShow = RecipeCardsInfo.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + itemLoad);
  };
  const hasMore = visibleCount < recipeCount;


  return (
    <div>
      {/* kv */}
      <section className={styles["jitan-kv"]}>
        <div className={`${styles["jitan-kv-container"]} container`}>
          <h1>みんなの<wbr />時短料理レシピ</h1>
          <p>我が家の定番！</p>
          <p>キッコーマン商品を<br />使った時短料理レシピ</p>
        </div>
      </section>
      <SubmitBtn />
      <div className={styles["gradient-bg"]}>

        {/* site map */}
        <section className={`${styles["site-route"]} container`}>
          <ul>
            <li><Link to="/">トップページ</Link><span></span></li>
            <li><img className={styles["forward-icon"]} src={forwardArrowIcon} alt="" /></li>
            <li><img src={cookIconOrange} alt="みんなの時短料理レシピアイコン" />みんなの時短料理レシピ</li>
          </ul>
        </section>
        {/* intro text */}
        <section className={styles["intro-text"]}>
          {/* <img src={jitanrecipeInroBgSp} alt="" /> */}
          <h2><span className={styles["intro-h2-1"]}>ママの笑顔が、<span className={styles["dressing-line1"]}></span></span><br /><span className={styles["intro-h2-2"]}>おいしさの秘訣！<span className={styles["dressing-line2"]}></span></span></h2>
          <p>料理は義務ではなく、達成感へ！<br />忙しいママたちの知恵が詰まった<wbr />時短レシピがここに集結短時間で<wbr />料理を完成させ、<br />家族の笑顔という「おいしい記憶」を<wbr />一緒に作りましょう<wbr />あなたの家だけの短時間レシピ<wbr />投稿をお待ちしています！</p>
        </section>
        {/* ranking */}
        <section className={`${styles["ranking"]} container shadow`}>
          <div className={styles["ranking-dashed-bg"]}></div>
          <h2 className={styles["ranking-title"]}>みんなが選んだ！<br />{prevMonth}月の時短料理レシピ<wbr />ランキング</h2>
          <h3 className={styles["ranking-theme"]}>豚肉<wbr />ｘ<wbr />キッコーマン醬油</h3>
          <p className={styles["ranking-inro"]}>先月の投票で選ばれた
            <wbr />時短料理レシピ（10位まで）<br />短時間でできても、家族との<wbr />かけがえのない思い出となる、<br />
            心温まるレシピをお届けします。</p>
        </section>
        <img className={styles["gradient-bg-y"]} src={gradientBgy} alt="" />
        <img className={styles["gradient-bg-o"]} src={gradientBgo} alt="" />
        {/* Recipe cards section */}
        <section className={`${styles["recipe-cards-section"]} container`}>
          {recipesToShow.map((recipe, index) => (
            <RecipeCard
              key={index}
              imgSrc={recipe.imgSrc}
              title={recipe.title}
              content={recipe.content}
            />
          ))}
          {hasMore && (
            <button type='button' className={`${styles["load-more-button"]} button`} onClick={showMore}>もっと見る +</button>
          )}
        </section>
      </div>
    </div>
  )
};

export default Jitanrecipe;