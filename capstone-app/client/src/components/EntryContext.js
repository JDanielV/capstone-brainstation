import React from "react";

class EntryContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedJoyful: true,
      pressedMotivated: true,
      pressedSatisfied: true,
      pressedStressed: true,
      pressedSad: true,
      pressedAngry: true,
      pressedNeutral: true,
    };
    this.bgJoyful = this.bgJoyful.bind(this);
    this.bgMotivated = this.bgMotivated.bind(this);
    this.bgSatisfied = this.bgSatisfied.bind(this);
    this.bgStressed = this.bgStressed.bind(this);
    this.bgSad = this.bgSad.bind(this);
    this.bgAngry = this.bgAngry.bind(this);
    this.bgNeutral = this.bgNeutral.bind(this);
  }

  // Another bunch of functions, one per button. Yikes
  bgJoyful() {
    this.setState({
      pressedJoyful: !this.state.pressedJoyful,
    });
  }

  bgMotivated() {
    this.setState({
      pressedMotivated: !this.state.pressedMotivated,
    });
  }

  bgSatisfied() {
    this.setState({
      pressedSatisfied: !this.state.pressedSatisfied,
    });
  }

  bgStressed() {
    this.setState({
      pressedStressed: !this.state.pressedStressed,
    });
  }

  bgSad() {
    this.setState({
      pressedSad: !this.state.pressedSad,
    });
  }

  bgAngry() {
    this.setState({
      pressedAngry: !this.state.pressedAngry,
    });
  }

  bgNeutral() {
    this.setState({
      pressedNeutral: !this.state.pressedNeutral,
    });
  }

  // END OF FUNCTION HELL

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
                    this.state.pressedJoyful
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleJoyful();
                    this.bgJoyful();
                  }}
                >
                  Joyful
                </button>
                <button
                  type="button"
                  className={
                    this.state.pressedMotivated
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleMotivated();
                    this.bgMotivated();
                  }}
                >
                  Motivated
                </button>
                <button
                  type="button"
                  className={
                    this.state.pressedSatisfied
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleSatisfied();
                    this.bgSatisfied();
                  }}
                >
                  Satisfied
                </button>
                <button
                  type="button"
                  className={
                    this.state.pressedStressed
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleStressed();
                    this.bgStressed();
                  }}
                >
                  Stressed
                </button>
                <button
                  type="button"
                  className={
                    this.state.pressedSad
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleSad();
                    this.bgSad();
                  }}
                >
                  Sad
                </button>
                <button
                  type="button"
                  className={
                    this.state.pressedAngry
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleAngry();
                    this.bgAngry();
                  }}
                >
                  Angry
                </button>

                <button
                  type="button"
                  className={
                    this.state.pressedNeutral
                      ? "entry-form__mood-button-unpressed"
                      : "entry-form__mood-button-pressed"
                  }
                  onClick={() => {
                    this.props.toggleNeutral();
                    this.bgNeutral();
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
