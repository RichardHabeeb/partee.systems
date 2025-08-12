import type { Component } from 'solid-js';
import styles from './App.module.css';
import EmailSignup from './components/EmailSignup';

const App: Component = () => {

  return (
    <div class={styles.container}>
      <main class={styles.main}>
        <header class={styles.header}>
          <h1 class={styles.title}>PARTEE!</h1>
          <p class={styles.subtitle}>
            The fast, usable, and secure enclave platform for latency-sensitive applications.
          </p>
        </header>

        <EmailSignup />
      </main>
    </div>
  );
};

export default App;
