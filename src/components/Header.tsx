import type { Component } from 'solid-js';
import styles from './Header.module.css';

const Header: Component = () => {
  return (
    <header class={styles.header}>
      <h1 class={styles.title}>PARTEE!</h1>
      <p class={styles.subtitle}>
      </p>
    </header>
  );
};

export default Header;
