import React from 'react';
import '../styles/Footer.css';
import lightBulbIcon from '../assets/solar_lightbulb-bold.svg';
import recipeCardImg from '../assets/recipe-card-img.jpeg';
import submitImg from '../assets/submit-img.jpeg';
import homecookingImg from '../assets/kid_smile.jpeg';
import FooterCard1 from './FooterCard1';
import FooterCard2 from './FooterCard2';



function Footer() {
  return (
    <footer className='container'>
      <h1>おすすめコンテンツ</h1>
      <img src={lightBulbIcon} alt="電球アイコン" /><p>別のページに移動、ホームクッキングトップページへ</p>
      <FooterCard1 link={"/jitanrecipe"} imgSrc={recipeCardImg} title={"みんなの時短料理レシピ"} description={"投票による「みんなの時短レシピ」ランキングと、キッコーマン社員によるリアルな時短レシピを公開しています！"} />
      <FooterCard1 link={"/JitanrecipeSubmit"} imgSrc={submitImg} title={<>先月投稿レシピ一覧・<br />投稿募集</>} description={"投稿ルールやFAQ、そして先月みんなが投稿したレシピを投票できる、コミュニティ参加の窓口です。"} />
      <FooterCard2 imgSrc={homecookingImg} title={<>ホームクッキング<br />トップページへ</>} description={"定番メニューのレシピ、つくり方を写真つきでていねいに、「なぜそうするのか」をわかりやすく解説するスペシャルコンテンツです。和食の豊かさを感じてください！"} />
    </footer>
  );
}

export default Footer;
