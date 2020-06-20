import React from "react";
import axios from "axios";
import EntryContent from "./EntryContent";
import EntryContext from "./EntryContext";
import MoodSelector from "./MoodSelector";

class NewEntryForm extends React.Component {
  apiLink = "http://localhost:5000";
  usersEndpoint = "/users";

  state = {
    step: 1,
    id: this.props.user.id, //still need to pass this prop
    title: "",
    content: "",
    contextOne: "",
    contextTwo: "",
    emotions: [],
    edited: "no",
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

  render() {
    const {
      step,
      title,
      content,
      contextOne,
      contextTwo,
      emotions,
      edited,
    } = this.state;
    const values = {
      step,
      title,
      content,
      contextOne,
      contextTwo,
      emotions,
      edited,
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
          <EntryContext
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <MoodSelector
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <h1>Entry Confirm</h1>;
    }
  }
}

export default NewEntryForm;
