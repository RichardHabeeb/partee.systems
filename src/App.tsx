import type { Component } from 'solid-js';
import styles from './App.module.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Section from './components/Section';
import Container from './components/Container';
import EmailSignup from './components/EmailSignup';

const App: Component = () => {

  return (
    <div class={styles.app}>
      <Nav />

      <Section background="var(--bg-primary)">
	  	<h1>PARTEE<i>!</i></h1>
	  	<h3><i>Secure Containers for Physical AI</i></h3>
      </Section>

      <Section background="var(--bg-primary)">
        <div class={styles.twoColumn}>
          <div>
            <h2>
              PARTEE Containers unlock trustworthy physical AI in
              a complex world.
            </h2>
          </div>
          <div>
            <p>
              Robotics and IoT are not built like the critical infrastructure
              of the past.
              Developers rapidly iterate on large software stacks that are
              vulnerable to insider threats and supply chain attacks.
              We created PARTEE because we're dedicated to providing day-one
              security, privacy, and reliability for the next-generation of
              robotics and IoT.
            </p>
          </div>
        </div>
      </Section>

      <Section background="var(--bg-primary)">
	  	<h2>Our vision and research</h2>
		<p>Read our <a href="/assets/whitepaper-feb-2026.pdf">white paper</a>.</p>
      </Section>

      <Section background="var(--bg-primary)">
	  	<h2>Our founding team</h2>
		<ul>
			<li><a href="https://habeeb.io">Richard Habeeb, PhD</a></li>
			<li><a href="https://www.linkedin.com/in/sophia-h-yang/">Sophia Yang</a></li>
			<li><a href="https://www.cs.yale.edu/homes/shao-zhong/">Zhong Shao, PhD</a></li>
		</ul>
      </Section>


      <Section background="var(--bg-primary)">
		<h2>Our Support</h2>
      </Section>

      <Section background="var(--blue)" lightText>
        <div class={styles.supporters}>
          <a href="https://ventures.yale.edu/2024-2025-roberts-awards">
            <img src="/assets/yvlogo.png" style="width: 250px;"/>
          </a>
          <a href="https://www.darpa.mil/research/programs/verified-security-and-performance-enhancement-of-large-legacy-software">
            <img src="/assets/darpa.png" style="width: 150px;"/>
          </a>
        </div>
      </Section>

      <Section background="var(--bg-primary)">
      </Section>
      <Section background="var(--bg-primary)">
	  	<p>Mailing list:</p>
      	<EmailSignup>
	    </EmailSignup>
      </Section>

      <Section background="var(--bg-primary)">
	  	<p>PARTEE Systems Company. <a href="mailto:richard@partee.systems">Learn more</a></p>
      </Section>
    </div>
  );
};

export default App;
