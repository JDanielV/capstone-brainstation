import React from "react";
import Header from "./Header";
import UserGreeting from "./UserGreeting";
import { Route } from "react-router-dom";
import axios from "axios";
import EntriesList from "./EntriesList";
import NewEntryForm from "./NewEntryForm";

class Home extends React.Component {
  apiLink = "http://localhost:5000";
  usersEndpoint = "/users";

  state = {
    userDetails: [],
    entriesList: [],
    formValues: {},
    updated: false,
  };

  // Function to catch form values

  getFormValues = (event, values) => {
    event.preventDefault();
    const compUpdate = this.state.updated;
    this.setState({ formValues: values, updated: !compUpdate });

    axios
      .post(
        `${this.apiLink}${this.usersEndpoint}/${this.state.formValues.id}`,
        values
      )
      .then((response) => {
        console.log(response);
        this.props.history.push(`/users/${this.state.userDetails.id}/entries`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getUserDetails = (id) => {
    axios.get(`${this.apiLink}${this.usersEndpoint}/${id}`).then((response) => {
      this.setState({ userDetails: response.data[0] });
    });
  };

  getEntriesList = (id) => {
    axios
      .get(`${this.apiLink}${this.usersEndpoint}/${id}/entries`)
      .then((response) => {
        this.setState({ entriesList: response.data });
      });
  };

  componentDidMount() {
    this.getUserDetails(this.props.match.params.id);
    this.getEntriesList(this.props.match.params.id);
  }

  componentWillUnmount() {
    console.log("Home has unmounted");
  }
  // componentDidUpdate(prevProps, prevState) {
  //   const oldState = prevState.updated;
  //   const newState = this.state.updated;
  //   if (oldState === newState) {
  //     console.log("same stuff");
  //   } else {
  //     console.log("new stuff");
  //     this.getEntriesList(this.state.userDetails.id);
  //     this.getUserDetails(this.state.userDetails.id);
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Component did update");
  // }
  render() {
    return (
      <>
        <Header
          user={this.state.userDetails}
          entriesList={this.state.entriesList}
        />
        <section className="home">
          <Route
            path="/users/:id"
            exact
            render={(props) => (
              <UserGreeting {...props} user={this.state.userDetails} />
            )}
          />
          <Route
            path="/users/:id/entries"
            render={(props) => (
              <EntriesList
                {...props}
                entriesList={this.state.entriesList}
                user={this.state.userDetails}
                getUserDetails={this.getUserDetails}
                getEntriesList={this.getEntriesList}
              />
            )}
          />
          <Route
            path="/users/:id/new-entry"
            render={(props) => (
              <NewEntryForm
                {...props}
                user={this.state.userDetails}
                getFormValues={this.getFormValues}
              />
            )}
          />
        </section>
      </>
    );
  }
}

export default Home;
