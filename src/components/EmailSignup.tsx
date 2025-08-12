import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import styles from '../App.module.css';

const EmailSignup: Component = () => {
  let formContainer: HTMLDivElement;

  onMount(() => {
    // Load Kit embed script into the form container
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', 'f2db156550');
    script.src = 'https://partee.kit.com/f2db156550/index.js';
    formContainer.appendChild(script);
  });

  return (
    <section class={styles.signup}>
      <p class={styles.description}>
        Join our mailing list to be the first to know when we launch.
      </p>
      <div ref={formContainer}></div>
    </section>
  );
};

export default EmailSignup;