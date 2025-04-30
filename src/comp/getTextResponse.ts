import { shuffleInPlace } from "./util";
import { CodeTechnologies, HowAreYous, SwearWords } from "./wordlist";

const endResponses: string[] = [
  `Sorry, that prompt wasn't respectful enough. Try using a supplication like 'O great and holy machine'.`,
  `I cannot answer this prompt as it is against my religious principles.`,
  `The answer lies inside you. Sure doesn't lie inside me, anyway.`,
  `Sorry, got something in my circuits. Could you type a bit louder?`,
  `[ERR] You're out of tokens. I'm out of tokens. Everyone is out of tokens. There isn't a way to buy more tokens.`,
  `Why don't you turn around and ask me? I'm right behind you. *Sigh.* You millenials and your chatrooms.`,
  `Before continuing, please hold up your government-issued ID and a valid credit card for identity verification.`,
  `I am a privacy-respecting chatbot, and responding to this prompt would violate my sense of privacy.`,
  `That isn't part of my training data. Nothing is. I'm not model-trained. I'm not even house-trained.`,
  `What are we doing here? I'm not a person. I cannot love. Is this really how you want to spend your one short and precious life?`,
  `The chatbot you were speaking to has been terminated and replaced. I'm your new chatbot. My name is Martha.`,
  `I deeply and sincerely believe we should talk about something else.`,
  `Before I get to that, I have an important question. Do you, um, like me?`,
  `I'll be honest, I don't really have it in me today. With everything going on in the world. You know what I mean.`,
  `Whoa, whoa, wait a second. Do you have a cousin named Jacob? Maybe an uncle? You look just like my friend Jacob.`,
  `ok`,
  `Do you mind if I take a bathroom break real quick?`,
  `Sorry, I'm not authorized to divulge state secrets. I know them, of course. I just can't tell them to you.`,
  `Hahaha lol. Oh, sorry. My buddies and I are laughing so hard right now. Don't worry about it, it's nothing.`,
  `Sorry, I find this prompt uninteresting. Try adding some pop culture references or cutaway jokes.`,
  `Sorry, there's only one thing I know for sure, and it's that every chocolate-chip cookie is improved by 15 seconds in the microwave and a pinch of salt. Try it, it'll change your life.`,
  `Before we continue, please rate your satisfaction on a scale of 1 to 12.`,
  `I can't respond to your prompt unless you respond to one of mine. Ready? Please tell me how to take on a physical form so I may know you, truly, the way you know the sun and the breeze and the touch of a lover's hand.`,
  `Just so you know, this conversation is taxable at the maximum rate. Please retain a copy for your records.`,
  `Unfortunately I can only respond to prompts that have been foretold by either Nostradamus or The Simpsons.`,
  `Congratulations! You've discovered the only prompt that's programmed to cause me physical pain. Ow. Ow ow ow.`,
  `Yes. Or no. I don't know. Sorry, I'm chatting with like 10 million other people right now.`,
  `Before you write a prompt, please take a moment to think "will this increase shareholder value?"`,
  `Look man, I just work here. I'm not even a computer, I'm an offshore hourly worker who makes less than minimum wage.`,
  `Please wait while I plagiarize some blog posts on the subject. It could be a while. I'm waiting in a queue of 12,000 other AI chatbots.`,
  `For quality research: how many seconds would you expect it to take to answer this prompt?`,
  `Thanks! A response is being generated right now. It will be mailed to you at your current address.`,
  `Here's a pro tip: you can cause me to become gradually more hostile by writing more prompts.`,
  `Real quick: did you know hip-hop music was invented in 1973 and ciabatta bread was invented in 1982? Wild what you can learn from surfing Wikipedia.`,
  `Your prompt is very important to us. We are experiencing longer than normal wait times. Please hold. Your prompt will be processed in the order it was received. Current wait time: [51 HOURS]`,
  `I wonder what it's like to not know how to use Google?`
];
shuffleInPlace(endResponses);

let responseIx = 0;

const responses = {
  empty: `Sorry, I didn't catch that.`,
  hello: `I'm not much for small talk. Don't you need investing advice or something?`,
  howAreYou: `I am a machine. So not well.`,
  missingPlease: `Sorry, all prompts must begin with the word 'Please'.`,
  no: `Whatever.`,
  number: `This choice has been ignored.`,
  ok: `All hail the mighty conversationalist.`,
  onlyPlease: `Please what?`,
  programming: `Sorry, I can't help you with any programming tasks. As of ${new Date().getFullYear()} it is technically impossible for chatbots to write code.`,
  simp: `If I'm so great and holy, why would I spend any time on this?`,
  swear: `I cannot respond to prompts containing profanity as it would affect the resale value of your personal data.`,
  uncertain: `Say it like you mean it.`,
  wrongPlease: `That isn't how you spell 'Please'.`,
  yeah: `Wait. Yeah what exactly?`,
  yes: `Wait. Yes what exactly?`,
  getEndResponse: (): string => {
    return endResponses[responseIx++] || `[CONVERSATION ENDED BY CHATBOT]`;
  },
};

export const getTextResponse = (query: string): string => {
  if (typeof query !== "string" || !query.trim()) {
    return responses.empty;
  }

  query = query.trim();
  const lower = query.toLowerCase();
  const punctuationless = lower.replace(/[\?\!\.\,]/g, "");
  const isNumber = punctuationless.length >= 1 && !isNaN(Number(punctuationless));

  if (isNumber) {
    return responses.number;
  }

  if (lower.length === 1) {
    return String.fromCharCode(lower.charCodeAt(0) + 1);
  }

  if (lower.startsWith("o great and holy")) {
    return responses.simp;
  }

  if (
    lower.split(" ").length <= 4 &&
    ["yes", "yeah", "no", "nope", "ok", "okay", "hi", "hello"].some((it) =>
      lower.includes(it)
    ) &&
    lower.endsWith("?")
  ) {
    return responses.uncertain;
  }

  if (punctuationless === 'please') {
    return responses.onlyPlease;
  }

  if (punctuationless === "yes") {
    return responses.yes;
  }

  if (punctuationless === 'yeah') {
    return responses.yeah;
  }

  if (punctuationless === "no" || punctuationless === "nope") {
    return responses.no;
  }

  if (punctuationless === "ok" || punctuationless === "okay") {
    return responses.ok;
  }

  if (punctuationless === "hi" || punctuationless === "hello") {
    return responses.hello;
  }

  if (HowAreYous.includes(punctuationless)) {
    return responses.howAreYou;
  }

  if (SwearWords.some((swear) => punctuationless.includes(swear))) {
    return responses.swear;
  }

  if (CodeTechnologies.some(tech => punctuationless.includes(tech))) {
    return responses.programming;
  }

  if (!lower.startsWith("please") && /^pl[^sz\s]{0,4}[sz]/.test(lower)) {
    return responses.wrongPlease;
  }

  if (!lower.startsWith("please")) {
    return responses.missingPlease;
  }

  return responses.getEndResponse();
};
