import React from "react";

const EntryContext = (props) => {
  const next = (event) => {
    event.preventDefault();
    props.nextStep();
  };

  const back = (event) => {
    event.preventDefault();
    props.previousStep();
  };

  const { values } = props;

  return (
    <section className="entry-form-wrapper">
      <form className="entry-form">
        <label className="entry-form__label">Context</label>
        <input
          className="entry-form__input"
          id="contextInputOne"
          type="text"
          name="contextInputOne"
          placeholder="Optional: Provide URL as context"
          onChange={props.handleChange("contextOne")}
          defaultValue={values.contextOne}
        />
        <input
          className="entry-form__input"
          id="contextInputTwo"
          type="text"
          name="contextInputTwo"
          placeholder="Optional: Provide URL as context"
          onChange={props.handleChange("contextTwo")}
          defaultValue={values.contextTwo}
        />
        <div className="entry-form__button-wrapper-context">
          <button className="entry-form__back-btn" onClick={back}>
            <span className="entry-form__back-arrow">{`<`}</span>
            Back
          </button>
          <button className="entry-form__next-btn" onClick={next}>
            Next<span className="entry-form__next-arrow">{`>`}</span>
          </button>
        </div>
        <section>
          <label className="entry-form__label">Moods</label>
          <p className="entry-form__text">Select all that apply</p>
          <div className="entry-form__mood-wrapper">
            <div className="entry-form__mood-buttons-wrapper">
              <button
                type="button"
                className="entry-form__mood-button entry-form__mood-button--joyful"
                onClick={() => props.toggleJoyful()}
              >
                Joyful
              </button>
              <button
                type="button"
                className="entry-form__mood-button entry-form__mood-button--motivated"
                onClick={() => props.toggleMotivated()}
              >
                Motivated
              </button>
              <button
                type="button"
                className="entry-form__mood-button entry-form__mood-button--satisfied"
                onClick={() => props.toggleSatisfied()}
              >
                Satisfied
              </button>
              <button
                type="button"
                className="entry-form__mood-button entry-form__mood-button--stressed"
                onClick={() => props.toggleStressed()}
              >
                Stressed
              </button>
              <button
                type="button"
                className="entry-form__mood-button entry-form__mood-button--sad"
                onClick={() => props.toggleSad()}
              >
                Sad
              </button>
              <button
                type="button"
                className="entry-form__mood-button entry-form__mood-button--angry"
                onClick={() => props.toggleAngry()}
              >
                Angry
              </button>

              <button
                type="button"
                className="entry-form__mood-button entry-form__mood-button--neutral"
                onClick={() => props.toggleNeutral()}
              >
                Neutral
              </button>
            </div>
          </div>
        </section>
      </form>
    </section>
  );
};

export default EntryContext;
