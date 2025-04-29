import { Component } from "solid-js";
import styles from "./chat.module.css";

export const Chat: Component = () => {
  return <div class={styles.wrap}>
    <div class={styles.messages}>
      <div class={styles.history}></div>
      <div class={styles.controls}></div>
    </div>
  </div>;
};
