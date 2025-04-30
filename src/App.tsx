import type { Component } from "solid-js";

import styles from "./App.module.css";
import Logo from './assets/icon.svg';
import { Chat } from "./comp/Chat";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img class={styles.logo} src={Logo} alt="ZLM logo" />
        <span>Zero Language Model 18u.rp4-advanced</span>
      </header>
      <section class={styles.content}>
        <Chat></Chat>
      </section>
      <footer class={styles.footer}>
        Made with annoyance by <a href="https://isaaclyman.com">Isaac Lyman</a>.
        Source available on{" "}
        <a href="https://github.com/isaaclyman/zlm">GitHub</a>.
      </footer>
    </div>
  );
};

export default App;
