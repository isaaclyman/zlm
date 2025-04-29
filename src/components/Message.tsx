import { Component } from "solid-js";
import styles from "./Message.module.css";

export interface MessageProps {
  message: string;
  isChatbot: boolean;
}

export const Message: Component<MessageProps> = (props) => {
  const chatbotStyles = {
    'align-self': 'flex-start',
    'background-color': '#2D2428',
    'color': 'white',
  };
  const userStyles = {
    'align-self': 'flex-end',
    'background-color': '#C9BBC1',
    'color': 'black',
  };
  const style = props.isChatbot ? chatbotStyles : userStyles;

  return (
    <div
      class={styles.wrap}
      style={style}
    >
      {props.message}
    </div>
  );
};
