import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {
  onMount(() => {
    // Load Kit embed script
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', 'f2db156550');
    script.src = 'https://partee.kit.com/f2db156550/index.js';
    document.head.appendChild(script);
  });

  return (
    <div class={styles.container}>
      <main class={styles.main}>
        <header class={styles.header}>
          <h1 class={styles.title}>PARTEE</h1>
          <p class={styles.subtitle}>
            The fast, usable, and secure enclave platform for latency-sensitive applications.
          </p>
        </header>

        <section class={styles.signup}>
          <p class={styles.description}>
            Join our mailing list to be the first to know when we launch.
          </p>
          <div data-uid="f2db156550" data-format="inline" data-page="f2db156550"></div>
        </section>
      </main>
    </div>
  );
};

export default App;
