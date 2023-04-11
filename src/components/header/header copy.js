import React from 'react';
import Link from 'next/link'

import style from './Header.module.css'; // assuming you have a Header.css file for styles

function Header() {
    return (
      <header className={style.header}>
        <h1>Business Name Generator</h1>
        <nav>
          <ul className={style.header_nav_ul}>
            <li className={style.header_nav_li}><Link className={style.header_nav_li}href="/">Home</Link></li>
            <li className={style.header_nav_li}><Link className={style.header_nav_li}href="/login">Login</Link></li>
            <li className={style.header_nav_li}><Link className={style.header_nav_li}href="/signup">Signup</Link></li>
            <li className={style.header_nav_li}><Link className={style.header_nav_li}href="#">Menu</Link></li>
            <li className={style.header_nav_li}><Link className={style.header_nav_li}href="#">Cart</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  export default Header;
  