import React from "react";
import Header from "./Header";
import UserGreeting from "./UserGreeting";
import { Route } from "react-router-dom";
import axios from "axios";
import EntriesList from "./EntriesList";

class Home extends React.Component {
  apiLink = "http://localhost:5000";
  usersEndpoint = "/users";

  state = {
    userDetails: [],
    entriesList: [],
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
  // componentDidUpdate(previousProps) {
  //   const oldUserId = previousProps.match.params.id;
  //   const newUserId = this.props.match.params.id;
  //   if (newUserId === oldUserId) {
  //     console.log("same user ID");
  //   } else {
  //     console.log("getting new user details");
  //     this.props.getEntriesList(newUserId);
  //     this.props.getUserDetails(newUserId);
  //   }
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
              />
            )}
          />
        </section>
      </>
    );
  }
}

export default Home;
