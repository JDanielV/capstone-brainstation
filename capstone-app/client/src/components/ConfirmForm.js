import React from "react";

const ConfirmForm = (props) => {
  const back = (event) => {
    event.preventDefault();
    props.previousStep();
  };
  return (
    <section className="entry-form__confirm">
      <h1 className="entry-form__confirm-banner">Confirm Entry?</h1>
      <h3 className="entry-form__label">Last chance to go back and review!</h3>
      <p className="entry-form__text">
        Entries cannot be edited, but can be deleted.
      </p>
      <div className="entry-form__button-wrapper-confirm">
        <button className="entry-form__back-btn" onClick={back}>
          <span className="entry-form__back-arrow">{`<`}</span>
          Back
        </button>
        <button type="submit" className="entry-form__confirm-btn">
          Submit
        </button>
      </div>
    </section>
  );
};

export default ConfirmForm;
