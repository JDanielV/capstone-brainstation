import React from "react";
import { Link } from "react-router-dom";

class ConfirmForm extends React.Component {
  state = {
    message: "",
  };

  back = (event) => {
    event.preventDefault();
    this.props.previousStep();
  };

  onClick = (event) => {
    event.preventDefault();

    if (
      this.props.values.title === "" ||
      this.props.values.title === null ||
      this.props.values.content === "" ||
      this.props.values.content === null
    ) {
      this.setState({
        message: "Make sure to fill Title and Content fields!",
      });
    } else {
      this.props.handleSubmit(event);
    }
    console.log(this.state.message[0]);
  };

  render() {
    let { message } = this.state;
    return (
      <section className="entry-form__confirm">
        <h1 className="entry-form__confirm-banner">Confirm Entry?</h1>
        <h3 className="entry-form__label">
          Last chance to go back and review!
        </h3>
        <p className="entry-form__text">
          Entries cannot be edited, but can be deleted.
        </p>
        <div className="entry-form__button-wrapper-confirm">
          <button className="entry-form__back-btn" onClick={this.back}>
            <span className="entry-form__back-arrow">{`<`}</span>
            Back
          </button>
          <Link
            to={`/users/${this.props.values.id}`}
            className="entry-form__confirm-link"
          >
            <button
              type="submit"
              className="entry-form__confirm-btn"
              onClick={this.onClick}
            >
              Submit
            </button>
          </Link>
        </div>
        <p className="entry-form__error">{this.state.message}</p>
      </section>
    );
  }
}

export default ConfirmForm;
