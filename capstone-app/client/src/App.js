import React from "react";
import axios from "axios";
import "./styles/main.css";
import UserSelection from "./components/UserSelection";
import Home from "./components/Home";
import { Route, Redirect } from "react-router-dom";

class App extends React.Component {
  apiLink = "http://localhost:5000";
  usersEndpoint = "/users";

  state = {
    users: [],
    userDetails: [],
    entriesList: [],
  };

  getUserList = () => {
    axios.get(`${this.apiLink}${this.usersEndpoint}`).then((response) => {
      this.setState({ users: response.data });
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
    this.getUserList();
    this.getUserDetails("1");
    this.getEntriesList("1");
  }

  render() {
    return (
      <div className="App">
        <Redirect exact from="/" to="/users" />
        <Route
          path="/users"
          exact
          render={(props) => <UserSelection users={this.state.users} />}
        />
        <Route
          path="/users/:id"
          render={(props) => (
            <Home
              {...props}
              userDetails={this.state.userDetails}
              entriesList={this.state.entriesList}
              getUserDetails={this.getUserDetails}
              getEntriesList={this.getEntriesList}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
