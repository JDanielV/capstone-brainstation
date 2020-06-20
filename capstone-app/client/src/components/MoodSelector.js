import React from "react";

const MoodSelector = (props) => {
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
    <section>
      <label className="entry-form__label">Select Moods</label>
      <div className="entry-form__button-wrapper-context">
        <button className="entry-form__back-btn" onClick={back}>
          <span className="entry-form__back-arrow">{`<`}</span>
          Back
        </button>
        <button className="entry-form__next-btn" onClick={next}>
          Next<span className="entry-form__next-arrow">{`>`}</span>
        </button>
      </div>
    </section>
  );
};

export default MoodSelector;
