import { Component } from "solid-js";
import styles from "./MessageLoader.module.css";
import "./loader.css";

export const MessageLoader: Component = () => {
  return (
    <div class={styles.wrap}>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
