import React from "react";
import axios from "axios";
import EntryContent from "./EntryContent";
import EntryContext from "./EntryContext";

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
    neutral: false,
    joyful: false,
    motivated: false,
    satisfied: false,
    sad: false,
    stressed: false,
    angry: false,
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

  // Functions to toggle the moods button
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

  render() {
    const {
      step,
      title,
      content,
      contextOne,
      contextTwo,
      moods,
      edited,
    } = this.state;
    const values = {
      step,
      title,
      content,
      contextOne,
      contextTwo,
      moods,
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
            />
          </>
        );
      case 3:
        return <h1>Placeholder</h1>;
      case 4:
        return <h1>Entry Confirm</h1>;
    }
  }
}

export default NewEntryForm;
