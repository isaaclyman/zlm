import { getImageResponse } from "./getImageResponse";
import { getTextResponse } from "./getTextResponse";
import {
  appendMessage,
  MessageSource,
  ResponseMode,
  responseMode,
  setChatbotThinking,
  setQuery,
} from "./state";

const actions = {
  sendUserMessage: (text: string, canvas?: HTMLCanvasElement) => {
    appendMessage({
      date: Date.now(),
      source: MessageSource.User,
      text,
    });
    setQuery("");
    setChatbotThinking(true);

    const response = responseMode() === ResponseMode.Image ? {
      imageDataUrl: getImageResponse(text, canvas),
    } : {
      text: getTextResponse(text)
    };
    const thinkTimeSeconds = Math.random() * 3 + 1;
    setTimeout(() => {
      setChatbotThinking(false);
      appendMessage({
        ...response,
        date: Date.now(),
        source: MessageSource.Chatbot,
      });
    }, thinkTimeSeconds * 1000);
  },
};

export default actions;
