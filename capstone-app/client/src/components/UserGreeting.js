import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class UserGreeting extends React.Component {
  apiLink = "http://localhost:5000";
  usersEndpoint = "/users";

  state = {
    showDeleteBtn: false,
  };

  userGreeting = () => {
    let timeNow = new Date();
    let hrs = timeNow.getHours();
    let greeting = "";

    if (hrs > 6) greeting = "Good morning"; // After 6am
    if (hrs > 12) greeting = "Good afternoon"; // After 12pm
    if (hrs > 17) greeting = "Good evening"; // After 5pm

    return greeting;
  };

  toggleDeleteButton = () => {
    let { showDeleteBtn } = this.state;
    showDeleteBtn = !showDeleteBtn;
    this.setState({
      showDeleteBtn,
    });
  };

  handleDelete = (id) => {
    axios
      .delete(`${this.apiLink}${this.usersEndpoint}/${id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push(`/users`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onDelete = () => {
    this.handleDelete(this.props.user.id);
  };

  render() {
    const { user } = this.props;
    return (
      <div className="home__greeting-container">
        <h1 className="home__greeting">{`${this.userGreeting()}, ${
          user.username
        }.`}</h1>
        <h3 className="home__question">Got something on your mind?</h3>
        <Link to="/users" className="home__link">
          <span className="home__change-user">Not {user.username}?</span>
        </Link>
        <div className="home__delete-btn-container">
          <div
            className="home__delete-btn-bg"
            onClick={this.toggleDeleteButton}
          >
            <img
              src="/bin.png"
              className="home__delete-btn"
              alt="delete icon"
            />
          </div>
          <button
            style={
              this.state.showDeleteBtn
                ? { display: "block" }
                : { display: "none" }
            }
            id="entry-detail__toggle-btn"
            className="home__delete-button"
            onClick={this.onDelete}
          >
            Delete User
          </button>
        </div>
      </div>
    );
  }
}

export default UserGreeting;
