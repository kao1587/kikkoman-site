import React, { useState, useEffect, useRef } from 'react';
import cookHatIcon from '../assets/mdi_cook.svg';
import TopSlideCard from "../components/TopSlideCard";
import styles from '../styles/Home.module.css';

function Home() {
  const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);
  const [elementHeight, setElementHeight] = useState(0);
  const topElementRef = useRef(null);

  const updateElementHeight = () => {
    if (topElementRef.current) {
      setElementHeight(topElementRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
      updateElementHeight();
    };

    updateElementHeight();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles["top"]} ref={topElementRef}>
      <div className={`${styles["top-container"]} container`}>
        <h1>みんなの時短レシピ</h1>
        <div className={styles["title-description"]}>
          <img src={cookHatIcon} alt="Fast & Deliciousアイコン" />
          <p>Fast & Delicious</p>
        </div>
        <TopSlideCard />
        <p className={styles["top-description"]}>ママの笑顔が、おいしさの秘訣！<br />忙しいママたちがシェアする時短レシピで、<br />短時間で家族に美味しい笑顔を<wbr />届けましょう。</p>
      </div>
      <div className={styles["top-background"]}>
        <svg xmlns="http://www.w3.org/2000/svg" width={viewPortWidth} height={elementHeight} viewBox={`0 0 ${viewPortWidth} 844`} fill="none">
          <path d="M0 64.4242C0 64.4242 314.311 -80.5302 512 64.4242C709.689 209.379 1024 123.03 1024 123.03V758.244C1024 758.244 856.178 951.195 512 758.244C167.822 565.292 0 758.244 0 758.244V64.4242Z" fill="white" />
        </svg>
      </div>
    </div>

  );
};

export default Home;