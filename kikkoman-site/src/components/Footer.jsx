import React from 'react';
// import '../styles/Footer.css';
import styles from '../styles/Footer.module.css';
import lightBulbIcon from '../assets/solar_lightbulb-bold.svg';
import recipeCardImg from '../assets/recipe-card-img.png';
import submitImg from '../assets/submit-img.png';
import homecookingImg from '../assets/kid_smile.jpeg';
import soysauceDrip from '../assets/soysauce-drip.png';
import tonkatsu from '../assets/tonkatsu.png';
import tomatoPack from '../assets/tomato_pack.png';
import soysauce from '../assets/soysauce.png';
import milin from '../assets/milin.png';
import soybeanMilk from '../assets/soybean-milk.png';
import tsuyu from '../assets/tsuyu.png';
import FooterCard1 from './FooterCard1';
import FooterCard2 from './FooterCard2';



function Footer() {
  return (
    <footer className='container'>
      <div className={styles["sp-imgGroup"]}>
        <img className={styles['product-img']} src={tsuyu} alt="本つゆ" />
        <img className={styles['soysauce-img']} src={soysauceDrip} alt="醤油一滴" />
        <img className={styles['product-img']} src={tonkatsu} alt="とんかつソース" />
        <img className={styles['soysauce-img']} src={soysauceDrip} alt="醤油一滴" />
        <img className={styles['product-img']} src={tomatoPack} alt="カットトマト" />
      </div>
      <div className={styles["footer-heading"]}>
        <h1 className={styles["h1-heading"]}>おすすめコンテンツ</h1>
        <div className={styles["footer-heading-intro"]}>
          <img src={lightBulbIcon} alt="電球アイコン" />
          <p>別のページに移動、ホームクッキングトップページへ</p>
        </div>
      </div>
      <div className={styles['footer-pageLinks']}>
        <div className={styles['footer-pageLink-upper']}>
          <FooterCard1 link={"/jitanrecipe"} imgSrc={recipeCardImg} title={<>みんなの時短料理<wbr />レシピ</>} description={"投票による「みんなの時短レシピ」ランキングと、キッコーマン社員によるリアルな時短レシピを公開しています！"} />
          <FooterCard1 link={"/JitanrecipeSubmit"} imgSrc={submitImg} title={<>先月投稿<wbr />レシピ一覧<wbr />・投稿募集</>} description={"投稿ルールやFAQ、そして先月みんなが投稿したレシピを投票できる、コミュニティ参加の窓口です。"} />
        </div>

        <FooterCard2 imgSrc={homecookingImg} title={<>ホームクッキング<br />トップページへ</>} description={"定番メニューのレシピ、つくり方を写真つきでていねいに、「なぜそうするのか」をわかりやすく解説するスペシャルコンテンツです。和食の豊かさを感じてください！"} />
      </div>
      <div className={styles["imgGroup"]}>
        <img className={styles['product-img']} src={soysauce} alt="本つゆ" />
        <img className={styles['soysauce-img']} src={soysauceDrip} alt="醤油一滴" />
        <img className={styles['product-img']} src={milin} alt="とんかつソース" />
        <img className={styles['soysauce-img']} src={soysauceDrip} alt="醤油一滴" />
        <img className={styles['product-img']} src={soybeanMilk} alt="カットトマト" />
      </div>
    </footer>
  );
}

export default Footer;
