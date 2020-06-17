import React from "react";
import "./styles/main.css";
import UserSelection from "./components/UserSelection";
import Home from "./components/Home";
import { Route, Redirect } from "react-router-dom";

class App extends React.Component {
  state = {
    users: [],
    userDetails: [],
  };

  render() {
    return (
      <div className="App">
        <Redirect exact from="/" to="/users" />
        <UserSelection />
        <Route path="/users/:id" render={(props) => <Home {...props} />} />
      </div>
    );
  }
}

export default App;
