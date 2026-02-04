import type { Component, JSX } from 'solid-js';
import styles from './Section.module.css';
import Container from './Container';

interface SectionProps {
  children: JSX.Element;
  background?: string;
  class?: string;
  noPaddingBottom?: boolean;
  lightText?: boolean;
}

const Section: Component<SectionProps> = (props) => {
  return (
    <section
      class={`${styles.section} ${props.noPaddingBottom ? styles.noPaddingBottom : ''} ${props.lightText ? styles.lightText : ''} ${props.class || ''}`}
      style={{ 'background-color': props.background }}
    >
      <Container>
        {props.children}
      </Container>
    </section>
  );
};

export default Section;
