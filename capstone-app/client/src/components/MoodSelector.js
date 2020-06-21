// COMPONENT LEFT UNUSED - DELETE IF NOT NEEDED BY THE END

import React from "react";

class MoodSelector extends React.Component {
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
      <section>
        <label className="entry-form__label">Select Moods</label>
        <div className="entry-form__button-wrapper-context">
          <button className="entry-form__back-btn" onClick={this.back}>
            <span className="entry-form__back-arrow">{`<`}</span>
            Back
          </button>
          <button className="entry-form__next-btn" onClick={this.next}>
            Next<span className="entry-form__next-arrow">{`>`}</span>
          </button>
        </div>
      </section>
    );
  }
}

export default MoodSelector;
