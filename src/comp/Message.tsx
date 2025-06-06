import { Component, JSX, Show } from "solid-js";
import styles from "./Message.module.css";
import { MessageImage, MessageSource, MessageText, SingleMessage } from "./state";

export interface MessageProps {
  message: SingleMessage;
}

export const Message: Component<MessageProps> = (props) => {
  const inlineStyles: { [source in MessageSource]: JSX.CSSProperties } = {
    [MessageSource.Chatbot]: {
      "align-self": "flex-start",
      "background-color": "#2D2428",
      color: "white",
    },
    [MessageSource.User]: {
      "align-self": "flex-end",
      "background-color": "#C9BBC1",
      color: "black",
    },
  };
  const style = inlineStyles[props.message.source];

  return (
    <div class={styles.wrap} style={style}>
      <Show when={(props.message as MessageText).text}>
        <div>{(props.message as MessageText).text}</div>
      </Show>
      <Show when={(props.message as MessageImage).imageDataUrl}>
        <img src={(props.message as MessageImage).imageDataUrl} class={styles.messageImage} />
      </Show>
      <div class={styles.timestamp}>
        {new Date(props.message.date).toLocaleTimeString()}
      </div>
    </div>
  );
};
