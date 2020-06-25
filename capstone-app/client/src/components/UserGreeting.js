import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class UserGreeting extends React.Component {
  apiLink = "http://localhost:5000";
  usersEndpoint = "/users";

  state = {
    showDeleteBtn: false,
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
        <h1 className="home__greeting">Good evening, {user.username}.</h1>
        <h3 className="home__question">Got something on your mind?</h3>
        <Link to="/users" className="home__link">
          <span className="home__change-user">Not {user.username}?</span>
        </Link>
        <div className="entry-detail__delete-btn-container">
          <div
            className="entry-detail__delete-btn-bg"
            onClick={this.toggleDeleteButton}
          >
            <img src="/bin.png" className="entry-detail__delete-btn" />
          </div>
          <button
            style={
              this.state.showDeleteBtn
                ? { display: "block" }
                : { display: "none" }
            }
            id="entry-detail__toggle-btn"
            className="entry-detail__delete-button"
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
