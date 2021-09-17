import React from 'react';
import styles from './Layout.module.css';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <a className={styles.logo}>Broccoli & Co.</a>
      </header>
      <main className={styles.content}> {children}</main>
      <footer className={styles.footer}>All rights reserved. Test task 2021</footer>
    </div>
  );
};
