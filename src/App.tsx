import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { Chat } from "./components/chat";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img class={styles.logo} src="/src/assets/icon.svg" alt="ZLM logo" />
        Zero Language Model 18u.rp4-advanced
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
