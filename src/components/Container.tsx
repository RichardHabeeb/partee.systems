import type { Component, JSX } from 'solid-js';
import styles from './Container.module.css';

interface ContainerProps {
  children: JSX.Element;
}

const Container: Component<ContainerProps> = (props) => {
  return (
    <div class={styles.container}>
      {props.children}
    </div>
  );
};

export default Container;
