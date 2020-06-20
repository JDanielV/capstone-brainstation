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
      </form>
    </section>
  );
};

export default EntryContext;
