import React, { useState, useEffect } from 'react';
import styles from '../styles/TopSlideCard.module.css';
import tonkatsuImg from '../assets/tonkatsu-dish.jpg';
import salmonImg from '../assets/salmon-dish.jpg';
import riceEggImg from '../assets/rice-egg.jpg';


const slideBtnCount = 3;
const slideTime = 3500;
const TopSlideCard = () => {
    // play btn
    const [isPlaying, setIsPlaying] = useState(true);
    const handlePlaybtn = () => {
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    // slide btn
    const btnArray = ["", "", ""];
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideBtnClick = (index) => {
        setActiveIndex(index);
        setIsPlaying(false);
    };

    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                setActiveIndex(prevIndex => (prevIndex + 1) % slideBtnCount);
            }, slideTime);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isPlaying]);

    // card info
    const cardInfo = [
        { title: "しょうがの風味が隠し味！ おろししょうゆで食べるカツレツ", tag: "ママの推しNo.1", imgSrc: tonkatsuImg },
        { title: "サーモンのガリバタしょうゆ焼き さらし新玉ねぎ添え", tag: "", imgSrc: salmonImg },
        { title: "炊き上がりの香りもごちそう！ 絶品茶飯", tag: "", imgSrc: riceEggImg }
    ];

    return (
        <div>
            <div className={`${styles["card-list-container"]} ${styles[`active-index-${activeIndex}`]}`}>
                {cardInfo.map((card, index) => (
                    <div style={{ backgroundImage: `url(${card.imgSrc})` }} key={index} className={`
                ${styles["card"]} 
                // ${styles[`card${index + 1}`]} 
                ${activeIndex === index ? styles["active"] : styles["hidden"]} 
                shadow`}>
                        <h2>{card.title}</h2>
                        {card.tag && <p className={styles["tag"]}>{card.tag}</p>}
                    </div>
                ))}
            </div>
            <div className={styles["button-group"]}>
                <div className={styles["slide-btn"]}>{btnArray.map((btn, index) => (
                    <button key={index} type='button' onClick={() => handleSlideBtnClick(index)} className={`${styles["btn"]} ${activeIndex === index ? styles["now-btn"] : ""}`}></button>
                ))}
                </div>
                <button
                    type='button'
                    className={`${styles["btn"]} ${isPlaying ? styles["pause-btn"] : styles["start-btn"]}`}
                    onClick={handlePlaybtn}
                ></button>
            </div>
        </div>
    )
}

export default TopSlideCard
