import { Accessor, Component, JSX } from "solid-js";
import styles from "./Controls.module.css";
import { query, ResponseMode, setQuery, setResponseMode } from "./state";
import actions from "./actions";

export interface ControlsProps {
  canvas: Accessor<HTMLCanvasElement | undefined>;
}

export const Controls: Component<ControlsProps> = (props) => {
  const handleInput: JSX.EventHandlerUnion<HTMLTextAreaElement, InputEvent> = (
    e
  ) => {
    setQuery(e.currentTarget.value);
  };

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }

    e.preventDefault();

    if (query() === "") {
      return;
    }

    actions.sendUserMessage(query(), props.canvas());
  };

  const handleModeChange: JSX.EventHandlerWithOptionsUnion<
    HTMLInputElement,
    Event,
    JSX.ChangeEventHandler<HTMLInputElement, Event>
  > = (e) => {
    const choice = e.currentTarget.value as ResponseMode;
    setResponseMode(choice);
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
                value={ResponseMode.Text}
                on:change={handleModeChange}
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
                value={ResponseMode.Image}
                on:change={handleModeChange}
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
