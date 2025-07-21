import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className='style.centerr'>Live Stats Dashboard</h1>
    </header>
  );
}

export default Header;