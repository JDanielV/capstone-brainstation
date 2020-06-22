import React from "react";
import EntryContent from "./EntryContent";
import EntryContext from "./EntryContext";
import ConfirmForm from "./ConfirmForm";
import { withRouter } from "react-router-dom";

class NewEntryForm extends React.Component {
  apiLink = "http://localhost:5000";
  usersEndpoint = "/users";

  state = {
    step: 1,
    id: this.props.user.id,
    title: "",
    content: "",
    contextOne: "",
    contextTwo: "",
    neutral: false,
    joyful: false,
    motivated: false,
    satisfied: false,
    sad: false,
    stressed: false,
    angry: false,
    edited: "no",

    pressedJoyful: true,
    pressedMotivated: true,
    pressedSatisfied: true,
    pressedStressed: true,
    pressedSad: true,
    pressedAngry: true,
    pressedNeutral: true,
  };

  // Function to handle submit when "submit" btn
  // is clicked in ConfirmForm.js

  actionUp = (event) => {};

  handleSubmit = (event) => {
    event.preventDefault();
    let formValues = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content,
      contextOne: this.state.contextOne,
      contextTwo: this.state.contextTwo,
      neutral: this.state.neutral,
      joyful: this.state.joyful,
      motivated: this.state.motivated,
      satisfied: this.state.satisfied,
      sad: this.state.sad,
      stressed: this.state.stressed,
      angry: this.state.angry,
      edited: this.state.edited,
    };
    this.props.getFormValues(event, formValues);
  };

  // Continue to next step in the form
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back a step in the form
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  // Functions to toggle the moods true/false
  // so many functions, I'm sure there's a better way to do this
  toggleJoyful = () => {
    let { joyful } = this.state;
    joyful = !joyful;
    this.setState({
      joyful,
    });
  };

  toggleMotivated = () => {
    let { motivated } = this.state;
    motivated = !motivated;
    this.setState({
      motivated,
    });
  };

  toggleSatisfied = () => {
    let { satisfied } = this.state;
    satisfied = !satisfied;
    this.setState({
      satisfied,
    });
  };

  toggleStressed = () => {
    let { stressed } = this.state;
    stressed = !stressed;
    this.setState({
      stressed,
    });
  };

  toggleSad = () => {
    let { sad } = this.state;
    sad = !sad;
    this.setState({
      sad,
    });
  };

  toggleAngry = () => {
    let { angry } = this.state;
    angry = !angry;
    this.setState({
      angry,
    });
  };

  toggleNeutral = () => {
    let { neutral } = this.state;
    neutral = !neutral;
    this.setState({
      neutral,
    });
  };

  // Another bunch of functions, one per button. Yikes

  bgJoyful = () => {
    let { pressedJoyful } = this.state;
    pressedJoyful = !pressedJoyful;
    this.setState({
      pressedJoyful,
    });
  };

  bgMotivated = () => {
    let { pressedMotivated } = this.state;
    pressedMotivated = !pressedMotivated;
    this.setState({
      pressedMotivated,
    });
  };

  bgSatisfied = () => {
    let { pressedSatisfied } = this.state;
    pressedSatisfied = !pressedSatisfied;
    this.setState({
      pressedSatisfied,
    });
  };

  bgStressed = () => {
    let { pressedStressed } = this.state;
    pressedStressed = !pressedStressed;
    this.setState({
      pressedStressed,
    });
  };

  bgSad = () => {
    let { pressedSad } = this.state;
    pressedSad = !pressedSad;
    this.setState({
      pressedSad,
    });
  };

  bgAngry = () => {
    let { pressedAngry } = this.state;
    pressedAngry = !pressedAngry;
    this.setState({
      pressedAngry,
    });
  };

  bgNeutral = () => {
    let { pressedNeutral } = this.state;
    pressedNeutral = !pressedNeutral;
    this.setState({
      pressedNeutral,
    });
  };

  // FUNCTION HELL ENDS HERE

  render() {
    const {
      step,
      id,
      title,
      content,
      contextOne,
      contextTwo,
      edited,
      pressedJoyful,
      pressedMotivated,
      pressedSatisfied,
      pressedStressed,
      pressedSad,
      pressedAngry,
      pressedNeutral,
    } = this.state;
    const values = {
      step,
      id,
      title,
      content,
      contextOne,
      contextTwo,
      edited,
      pressedJoyful,
      pressedMotivated,
      pressedSatisfied,
      pressedStressed,
      pressedSad,
      pressedAngry,
      pressedNeutral,
    };
    switch (step) {
      case 1:
        return (
          <EntryContent
            nextStep={this.nextStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <>
            <EntryContext
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              values={values}
              handleChange={this.handleChange}
              toggleJoyful={this.toggleJoyful}
              toggleMotivated={this.toggleMotivated}
              toggleSatisfied={this.toggleSatisfied}
              toggleStressed={this.toggleStressed}
              toggleSad={this.toggleSad}
              toggleAngry={this.toggleAngry}
              toggleNeutral={this.toggleNeutral}
              bgJoyful={this.bgJoyful}
              bgMotivated={this.bgMotivated}
              bgSatisfied={this.bgSatisfied}
              bgStressed={this.bgStressed}
              bgSad={this.bgSad}
              bgAngry={this.bgAngry}
              bgNeutral={this.bgNeutral}
            />
          </>
        );
      case 3:
        return (
          <ConfirmForm
            previousStep={this.previousStep}
            handleSubmit={this.handleSubmit}
            values={values}
          />
        );
    }
  }
}

export default withRouter(NewEntryForm);
