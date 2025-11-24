import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';
import KikkomanLogo from '../assets/kikkoman-logo.svg';
import footerbgBottom from '../assets/footerbg-bottom.svg';



const Footer = () => {
    return (
        <footer>
            <div className={styles["footerbg-top"]}>
                <h2 className={styles["footer-h2"]}><Link to={"/"}><img src={KikkomanLogo} alt="Kikkoman" /></Link></h2>
                <div className={`${styles["footer-nav"]} container`}>
                    <div className={styles["footer-nav-right"]}>
                        <Link to="https://www.kikkoman.co.jp/homecook/" target='_blank'><h3 className={`${styles["footer-h3"]} container`}>ホームクッキングトップ<wbr />ページへ<span class="material-symbols-outlined">open_in_new</span></h3></Link>
                        <ul className={`${styles["footer-ul"]} container`}>
                            <li><Link to="https://www.kikkoman.co.jp/homecook/theme/popular/" target='_blank'>人気のレシピまとめ<span class="material-symbols-outlined">open_in_new</span></Link></li>
                            <li><Link to="https://www.kikkoman.co.jp/homecook/theme/popular/movie.html" target='_blank'>おすすめレシピ動画<span class="material-symbols-outlined">open_in_new</span></Link></li>
                            <li><Link to="https://www.kikkoman.co.jp/homecook/basic/" target='_blank'>料理の基本<span class="material-symbols-outlined">open_in_new</span></Link></li>
                            <li><Link to="https://www.kikkoman.co.jp/homecook/season/vegetable.html" target='_blank'>旬の食材辞典<span class="material-symbols-outlined">open_in_new</span></Link></li>
                            <li><Link to="https://www.kikkoman.co.jp/homecook/theme/event/" target='_blank'>行事イベントのレシピ<span class="material-symbols-outlined">open_in_new</span></Link></li>
                            <li><Link to="https://www.kikkoman.co.jp/homecook/theme/kisetsu/" target='_blank'>季節の献立レシピ集<span class="material-symbols-outlined">open_in_new</span></Link></li>
                        </ul>
                    </div>
                    <div className={styles["footer-nav-left"]}>
                        <Link to={"/jitanrecipe"}><h3 className={`${styles["footer-h3"]} container`}>みんなの時短レシピ</h3></Link>
                        <ul className={`${styles["footer-ul"]} container`}>
                            <li><Link to={"/jitanrecipe#ranking"}>時短料理レシピランキング</Link></li>
                            <li><Link to={"/jitanrecipe#theme"}>今月のテーマ</Link></li>
                            <li><Link to={"/jitanrecipe#staffmember-recipe"}>社員のリアル時短レシピ</Link></li>
                        </ul>
                        <Link to={"/jitanrecipeSubmit"}><h3 className={`${styles["footer-h3"]} container`}>先月投稿レシピ一覧・投稿募集</h3></Link>
                        <ul className={`${styles["footer-ul"]} container`}>
                            <li><Link to={"/jitanrecipe#recipe-vote"}>【投票】先月の時短レシピ一覧</Link></li>
                            <li><Link to={"/jitanrecipe#submission-rule"}>投稿ルール説明・投稿</Link></li>
                            <li><Link to={"/jitanrecipe#FAQ"}>よくある質問</Link></li>
                        </ul>
                    </div>
                </div>
                <p className={styles["alcohol-alert"]}>飲酒は20歳になってから。飲酒運転は法律で禁止されています。<br />妊娠中や授乳期の飲酒は胎児・乳児の発育に悪影響を与えるおそれがあります。<br />お酒は楽しく適量で。のんだあとはリサイクル。</p>
                <small className={styles["copyright"]}>&copy; Kikkoman Corporation</small>
            </div>
            <div className={styles["footerbg-bottom"]}>
                <img src={footerbgBottom} alt="フッターバックグラウンド" />
            </div>
        </footer>
    )
}

export default Footer;
