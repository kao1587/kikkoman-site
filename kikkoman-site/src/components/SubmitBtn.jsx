import React from 'react';
import styles from '../styles/Submitbtn.module.css';
import usePageScroll from '../hooks/usePageScroll';

const SubmitBtn = () => {
  const scrollDirection = usePageScroll();
  const btnClass = `
    ${scrollDirection === 'down' ? styles["btn-sp-show"] : ''}
  `;
  return (
    <button type='button' className={`${styles["submit-btn"]} ${btnClass} shadow`}>今すぐ<br />投稿する</button>
  )
}

export default SubmitBtn
