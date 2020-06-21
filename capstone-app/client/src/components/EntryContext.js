import React from "react";

class EntryContext extends React.Component {
  next = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values } = this.props;
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
            onChange={this.props.handleChange("contextOne")}
            defaultValue={values.contextOne}
          />
          <input
            className="entry-form__input"
            id="contextInputTwo"
            type="text"
            name="contextInputTwo"
            placeholder="Optional: Provide URL as context"
            onChange={this.props.handleChange("contextTwo")}
            defaultValue={values.contextTwo}
          />
          <div className="entry-form__button-wrapper-context">
            <button className="entry-form__back-btn" onClick={this.back}>
              <span className="entry-form__back-arrow">{`<`}</span>
              Back
            </button>
            <button className="entry-form__next-btn" onClick={this.next}>
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
                  className={
                    values.pressedJoyful
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleJoyful();
                    this.props.bgJoyful();
                  }}
                >
                  Joyful
                </button>
                <button
                  type="button"
                  className={
                    values.pressedMotivated
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleMotivated();
                    this.props.bgMotivated();
                  }}
                >
                  Motivated
                </button>
                <button
                  type="button"
                  className={
                    values.pressedSatisfied
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleSatisfied();
                    this.props.bgSatisfied();
                  }}
                >
                  Satisfied
                </button>
                <button
                  type="button"
                  className={
                    values.pressedStressed
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleStressed();
                    this.props.bgStressed();
                  }}
                >
                  Stressed
                </button>
                <button
                  type="button"
                  className={
                    values.pressedSad
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleSad();
                    this.props.bgSad();
                  }}
                >
                  Sad
                </button>
                <button
                  type="button"
                  className={
                    values.pressedAngry
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleAngry();
                    this.props.bgAngry();
                  }}
                >
                  Angry
                </button>

                <button
                  type="button"
                  className={
                    values.pressedNeutral
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleNeutral();
                    this.props.bgNeutral();
                  }}
                >
                  Neutral
                </button>
              </div>
            </div>
          </section>
        </form>
      </section>
    );
  }
}

export default EntryContext;
