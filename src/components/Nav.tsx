import type { Component } from 'solid-js';
import styles from './Nav.module.css';
import Container from './Container';

const Nav: Component = () => {
  return (
    <nav class={styles.nav}>
      <Container>
        <div class={styles.navContent}>
          <div class={styles.logo}></div>
          <ul class={styles.navList}>
            <li><a href="https://github.com/CertiKOS/PARTEE">Github</a></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
