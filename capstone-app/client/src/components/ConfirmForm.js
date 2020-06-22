import React from "react";
import { Link } from "react-router-dom";

const ConfirmForm = (props) => {
  const back = (event) => {
    event.preventDefault();
    props.previousStep();
  };

  const onClick = (event) => {
    event.preventDefault();
    props.handleSubmit(event);
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
        <Link
          to={`/users/${props.values.id}`}
          className="entry-form__confirm-link"
        >
          <button
            type="submit"
            className="entry-form__confirm-btn"
            onClick={onClick}
          >
            Submit
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ConfirmForm;
