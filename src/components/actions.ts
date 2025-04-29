import { getTextResponse } from "./brain";
import {
  appendMessage,
  MessageSource,
  setChatbotThinking,
  setQuery,
} from "./state";

const actions = {
  sendUserMessage: (text: string) => {
    appendMessage({
      date: Date.now(),
      source: MessageSource.User,
      text,
    });
    setQuery("");
    setChatbotThinking(true);

    const response = getTextResponse(text);
    const thinkTimeSeconds = Math.random() * 3 + 1;
    setTimeout(() => {
      setChatbotThinking(false);
      appendMessage({
        date: Date.now(),
        source: MessageSource.Chatbot,
        text: response,
      });
    }, thinkTimeSeconds * 1000);
  },
};

export default actions;
