import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { Chat } from "./components/Chat";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img class={styles.logo} src="/src/assets/icon.svg" alt="ZLM logo" />
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
