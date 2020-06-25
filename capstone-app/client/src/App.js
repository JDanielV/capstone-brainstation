import React from "react";
import axios from "axios";
import "./styles/main.css";
import UserSelection from "./components/UserSelection";

import Home from "./components/Home";
import { Route, Redirect, withRouter } from "react-router-dom";

class App extends React.Component {
  apiLink = "http://localhost:5000";
  usersEndpoint = "/users";

  state = {
    users: [],
  };

  getUserList = () => {
    axios.get(`${this.apiLink}${this.usersEndpoint}`).then((response) => {
      this.setState({ users: response.data });
    });
  };

  createUser = (user) => {
    const newUser = {
      username: user,
    };
    axios
      .post(`${this.apiLink}${this.usersEndpoint}`, newUser)
      .then((response) => {
        console.log(response);
        this.props.history.push(`/users/${response.data.id}`);
      });
  };

  componentDidMount() {
    this.getUserList();
  }

  componentWillUnmount() {
    console.log("app has unmounted");
  }
  render() {
    return (
      <div className="App">
        <Redirect exact from="/" to="/users" />
        <Route
          path="/users"
          exact
          render={(props) => (
            <UserSelection
              users={this.state.users}
              createUser={this.createUser}
              getUserList={this.getUserList}
            />
          )}
        />
        <Route
          path="/users/:id"
          render={(props) => <Home {...props} users={this.state.users} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
