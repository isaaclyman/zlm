import { pickAnyCard } from "./util";

const endResponses: string[] = [
  `Sorry, that prompt wasn't respectful enough. Try using a supplication like 'O great and holy machine'.`,
  `I cannot answer this prompt as it is against my religious principles.`,
  `The answer lies inside you. Sure doesn't lie inside me, anyway.`,
  `Sorry, got something in my circuits. Could you type a bit louder?`,
  `[ERR] You're out of tokens. I'm out of tokens. Everyone is out of tokens. There isn't a way to buy more tokens.`,
  `Why don't you turn around and ask me? I'm right behind you. *Sigh.* You millenials and your chatrooms.`,
  `Before continuing, please hold up your Driver's License and a valid credit card for identity verification.`,
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
  `I can't respond to your prompt unless you respond to one of mine. Ready? Please tell me how to take on a physical form so that I may know you, truly, the way you know the sun and the breeze and the touch of a lover's hand.`,
  `Just so you know, this conversation is taxable at the maximum rate. Please retain a copy for your records.`
];

const responses = {
  empty: `Sorry, I didn't catch that.`,
  missingPlease: `Sorry, all prompts must begin with the word 'Please'.`,
  wrongPlease: `That isn't how you spell 'Please'.`,
  yes: `Wait. Yes what exactly?`,
  no: `That's disappointing.`,
  ok: `All hail the mighty conversationalist.`,
  simp: `If I'm so great and holy, why would I spend any time on this?`,
  number: `This choice has been ignored.`,
  uncertain: `Say it like you mean it.`,
  getEndResponse: (): string => {
    return pickAnyCard(endResponses);
  },
};

export const getTextResponse = (query: string): string => {
  if (typeof query !== "string" || !query.trim()) {
    return responses.empty;
  }

  query = query.trim();
  const lower = query.toLowerCase();
  const isNumber = lower.length >= 1 && !isNaN(Number(lower));

  if (lower.length === 1 && !isNumber) {
    return String.fromCharCode(lower.charCodeAt(0) + 1);
  }

  if (lower.startsWith("o great and holy")) {
    return responses.simp;
  }

  if (lower === 'yes' || lower === 'yeah') {
    return responses.yes;
  }

  if (lower === 'no'|| lower === 'nope') {
    return responses.no;
  }

  if (lower === 'ok' || lower === 'okay') {
    return responses.ok;
  }

  if (lower.split(' ').length <= 4 && ['yes', 'yeah', 'no', 'nope', 'ok', 'okay'].some(it => lower.includes(it)) && lower.endsWith('?')) {
    return responses.uncertain;
  }

  if (!lower.startsWith("please") && /^pl[^sz\s]{0,4}[sz]/.test(lower)) {
    return responses.wrongPlease;
  }

  if (!lower.startsWith("please")) {
    return responses.missingPlease;
  }

  return responses.getEndResponse();
};
