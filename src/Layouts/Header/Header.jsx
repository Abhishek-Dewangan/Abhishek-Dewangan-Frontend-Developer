import React from 'react';
import styles from './Header.module.css';
import {SiSpacex} from 'react-icons/si';
import {GiHamburgerMenu} from 'react-icons/gi';

export const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <h2>Space</h2>
          <SiSpacex size={'68px'} />
        </div>
        <div className={styles.menuIcon}>
          <GiHamburgerMenu size={'35px'}/>
        </div>
      </div>
    </nav>
  );
};
