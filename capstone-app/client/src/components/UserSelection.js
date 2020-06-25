import React from "react";
import { Link } from "react-router-dom";

class UserSelection extends React.Component {
  state = {
    showAddField: false,
  };

  toggleAddUser = () => {
    let { showAddField } = this.state;
    showAddField = !showAddField;
    this.setState({
      showAddField,
    });
  };

  addUser = (event) => {
    event.preventDefault();
    this.props.createUser(event.target.newUserInput.value);
  };

  componentDidMount() {
    this.props.getUserList();
  }

  render() {
    return (
      <section className="user-selection">
        <h1 className="user-selection__greeting">Hi there,</h1>
        <h3 className="user-selection__welcome">welcome to Light Mind.</h3>
        <h3 className="user-selection__cta">Please select your name:</h3>
        <ul className="user-selection__ul">
          {this.props.users.map((user) => (
            <Link
              to={`/users/${user.id}`}
              key={user.id}
              className="user-selection__link"
            >
              <li className="user-selection__li">{user.username}</li>
            </Link>
          ))}
        </ul>
        <span className="user-selection__add-new" onClick={this.toggleAddUser}>
          Add New User
        </span>
        <form
          className="user-selection__add-new-form"
          onSubmit={this.addUser}
          style={
            this.state.showAddField ? { display: "block" } : { display: "none" }
          }
        >
          <input
            className="user-selection__add-new-input"
            name="newUserInput"
          />
        </form>
      </section>
    );
  }
}

export default UserSelection;
