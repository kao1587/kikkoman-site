import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';
import KikkomanLogo from '../assets/kikkoman-logo.svg';
import mailIcon from '../assets/material-symbols_mail.svg';
import cookIcon from '../assets/fluent_spatula-spoon-16-filled.svg';
import cookHatIcon from '../assets/mdi_cook.svg';
import { Link } from 'react-router-dom';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div>
      {/* smartphone */}
      <header className='container smartphone' ref={menuRef}>
        <div className="header-logo-btngroup">
          <h1><Link to="home" onClick={closeMenu}><img src={KikkomanLogo} alt="Kikkoman" /></Link></h1>
          <div className="btn-group">
            <button className='contact-btn' type='button'><img src={mailIcon} alt="mail icon" /></button>
            <button className={`hamburger-btn ${isMenuOpen ? 'close' : ''}`} type='button' onClick={toggleMenu}>
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </button>
          </div>
        </div>
        <nav className={`${isMenuOpen ? 'visible' : 'invisible'}`}>
          <ul>
            <li><Link to="/jitanrecipe" onClick={toggleMenu}><img src={cookIcon} alt="みんなの時短料理レシピアイコン" />みんなの時短料理レシピ</Link></li>
            <li><Link to="/jitanrecipeSubmit" onClick={toggleMenu}><img src={cookHatIcon} alt="先月投稿レシピ一覧・投稿募集アイコン" />先月投稿レシピ一覧・投稿募集</Link></li>
          </ul>
        </nav>
        {isMenuOpen && <div onClick={toggleMenu}></div>}
      </header>
      {/* pc tablet */}
      <header className='container normal'>
        <h1><Link to="home"><img src={KikkomanLogo} alt="Kikkoman" /></Link></h1>
        <div className="nav-btn-group">
          <nav>
            <ul>
              <li><Link to="/jitanrecipe" onClick={toggleMenu}><img src={cookIcon} alt="みんなの時短料理レシピアイコン" />みんなの<wbr />時短料理レシピ</Link></li>
              <li><Link to="/jitanrecipeSubmit" onClick={toggleMenu}><img src={cookHatIcon} alt="先月投稿レシピ一覧・投稿募集アイコン" />先月投稿<wbr />レシピ一覧・<wbr />投稿募集</Link></li>
            </ul>
          </nav>
          <button className='contact-btn' type='button'><img src={mailIcon} alt="mail icon" /><span className='tablet-invisible'>お問い合わせ</span></button>
        </div>

      </header>
    </div>

  );
}

export default Header;