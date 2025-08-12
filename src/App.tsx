import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {
  const [email, setEmail] = createSignal('');
  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [submitStatus, setSubmitStatus] = createSignal<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (!email()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.convertkit.com/v4/forms/8428400/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "X-Kit-Api-Key": 'QJnSfiLvI3oQROOSz4Fe9g',
        },
        body: JSON.stringify({
          "email_account": email(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form class={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              class={styles.emailInput}
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
              required
              disabled={isSubmitting()}
            />
            <button
              type="submit"
              class={styles.submitButton}
              disabled={isSubmitting() || !email()}
            >
              {isSubmitting() ? 'Submitting...' : 'Get Notified'}
            </button>
          </form>

          {submitStatus() === 'success' && (
            <p class={styles.successMessage}>
              Thanks! You'll be the first to know when we launch.
            </p>
          )}

          {submitStatus() === 'error' && (
            <p class={styles.errorMessage}>
              Something went wrong. Please try again.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
