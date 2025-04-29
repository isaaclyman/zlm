import { createSignal } from "solid-js";

export enum MessageSource {
  Chatbot = "chatbot",
  User = "user",
}

export interface SingleMessage {
  date: number;
  source: MessageSource;
  text: string;
}

const defaultMessage: SingleMessage = {
  date: Date.now(),
  source: MessageSource.Chatbot,
  text: `Hi! I'm ZLM, an AI chatbot. What can I do for you?`,
};

export const [messages, setMessages] = createSignal<SingleMessage[]>([
  defaultMessage,
]);
export const appendMessage = (message: SingleMessage) =>
  setMessages([...messages(), message]);

export const [query, setQuery] = createSignal("");

export const [chatbotThinking, setChatbotThinking] = createSignal(false);
