import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { supabase } from '../supabase';
import styles from './EmailSignup.module.css';

const EmailSignup: Component = () => {
  const [email, setEmail] = createSignal('');
  const [status, setStatus] = createSignal<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = createSignal('');

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const { error } = await supabase
      .from('mailing-list')
      .insert({ email: email() });

    if (error && error.code !== '23505') {
      setStatus('error');
      setErrorMessage(error.message);
    } else {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <div class={styles.signup}>
      {status() === 'success' ? (
        <p>Thanks for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
            required
            disabled={status() === 'loading'}
          />
          <button type="submit" disabled={status() === 'loading'}>
            {status() === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
          {status() === 'error' && <p class={styles.error}>{errorMessage()}</p>}
        </form>
      )}
    </div>
  );
};

export default EmailSignup;
