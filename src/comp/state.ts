import { createSignal } from "solid-js";

export enum MessageSource {
  Chatbot = "chatbot",
  User = "user",
}

type MessageBase = {
  date: number;
  source: MessageSource;
}

export interface MessageText extends MessageBase {
  text: string;
}

export interface MessageImage extends MessageBase {
  imageDataUrl: string;
}

export type SingleMessage = MessageText | MessageImage;

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

export enum ResponseMode {
  Text = "text",
  Image = "image",
}

export const [responseMode, setResponseMode] = createSignal(ResponseMode.Text);
