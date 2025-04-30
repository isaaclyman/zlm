import { Component, createEffect, createSignal, For, Show } from "solid-js";
import styles from "./Chat.module.css";
import { Message } from "./Message";
import { Controls } from "./Controls";
import { chatbotThinking, messages } from "./state";
import { MessageLoader } from "./MessageLoader";
import { Portal } from "solid-js/web";

export const Chat: Component = () => {
  let historyPane!: HTMLDivElement;
  
  let [renderCanvas, setRenderCanvas] = createSignal<HTMLCanvasElement>();

  createEffect(() => {
    messages();
    chatbotThinking();
    historyPane.scrollTo(0, historyPane.scrollHeight);
  });

  return (
    <div class={styles.wrap}>
      <div class={styles.messages}>
        <div class={styles.history} ref={historyPane}>
          <For each={messages()}>
            {(message) => <Message message={message} />}
          </For>
          <Show when={chatbotThinking()}>
            <MessageLoader />
          </Show>
        </div>
        <div class={styles.controls}>
          <Controls canvas={renderCanvas} />
        </div>
      </div>
      <Portal>
        <canvas
          ref={(el) => (setRenderCanvas(el))}
          hidden
          style="display: none;"
        ></canvas>
      </Portal>
    </div>
  );
};
