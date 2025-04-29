import { Component } from "solid-js";
import styles from "./Chat.module.css";
import { Message } from "./Message";
import { Controls } from "./Controls";

export const Chat: Component = () => {
  const messages = ["Hi! I'm ZLM, an AI chatbot. What can I do for you?"];

  return (
    <div class={styles.wrap}>
      <div class={styles.messages}>
        <div class={styles.history}>
          {messages.map((message) => (
            <Message message={message} isChatbot={true} />
          ))}
        </div>
        <div class={styles.controls}>
          <Controls />
        </div>
      </div>
    </div>
  );
};
