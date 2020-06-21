import React from "react";
import { Link } from "react-router-dom";

const EntryContent = (props) => {
  const next = (event) => {
    event.preventDefault();
    props.nextStep();
  };

  const { values } = props;

  return (
    <section className="entry-form-wrapper">
      <form className="entry-form">
        <label className="entry-form__label" htmlFor="titleInput">
          Title
        </label>
        <input
          className="entry-form__input"
          id="titleInput"
          type="text"
          name="titleInput"
          placeholder="Enter the title of your entry"
          onChange={props.handleChange("title")}
          defaultValue={values.title}
        />
        <label className="entry-form__label" htmlFor="contentInput">
          Content
        </label>
        <textarea
          className="entry-form__textarea"
          id="contentInput"
          type="text"
          name="contentInput"
          placeholder="Enter the content of your entry"
          onChange={props.handleChange("content")}
          defaultValue={values.content}
        />
        <div className="entry-form__button-wrapper">
          <Link to={`/users/${values.id}`} className="entry-form__link">
            <button className="entry-form__back-btn">
              <span className="entry-form__back-arrow">{`<`}</span>
              Home
            </button>
          </Link>
          <button className="entry-form__next-btn" onClick={next}>
            Next<span className="entry-form__next-arrow">{`>`}</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default EntryContent;
