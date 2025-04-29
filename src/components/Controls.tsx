import { Component, JSX } from "solid-js";
import styles from "./Controls.module.css";
import { query, setQuery } from "./state";
import actions from "./actions";

export const Controls: Component = () => {
  const handleInput: JSX.EventHandlerUnion<HTMLTextAreaElement, InputEvent> = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }

    e.preventDefault();

    if (query() === '') {
      return;
    }
    
    actions.sendUserMessage(query());
  };

  return (
    <div class={styles.wrap}>
      <div class={styles.queryWrap}>
        <textarea
          class={styles.query}
          autofocus
          on:keypress={handleKeypress}
          on:input={handleInput}
          value={query()}
        ></textarea>
        <span class={styles.queryInstruction}>
          <strong>Enter</strong> to send
        </span>
      </div>
      <div class={styles.mode}>
        <fieldset>
          <legend class={styles.modeLegend}>Generate:</legend>
          <div class={styles.pillWrap}>
            <div class={styles.pillItem}>
              <input
                class={styles.pillInput}
                type="radio"
                name="modes"
                id="text-mode"
                checked
              />
              <label class={styles.pillLabel} for="text-mode">
                Text
              </label>
            </div>
            <div class={styles.pillItem}>
              <input
                class={styles.pillInput}
                type="radio"
                name="modes"
                id="image-mode"
              />
              <label class={styles.pillLabel} for="image-mode">
                Image
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};
