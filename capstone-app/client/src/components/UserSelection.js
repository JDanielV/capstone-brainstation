import React from "react";
import { Link } from "react-router-dom";

const UserSelection = ({ users }) => {
  return (
    <section className="user-selection">
      <h1 className="user-selection__greeting">Hi there,</h1>
      <h3 className="user-selection__welcome">welcome to Capstone.</h3>
      <h3 className="user-selection__cta">Please select your name:</h3>
      <ul className="user-selection__ul">
        {users.map((user) => (
          <Link
            to={`/users/${user.id}`}
            key={user.id}
            className="user-selection__link"
          >
            <li className="user-selection__li">{user.username}</li>
          </Link>
        ))}
        {/* <li className="user-selection__li">Aracely</li> */}
      </ul>
      <span className="user-selection__add-new">Add New User</span>
    </section>
  );
};

export default UserSelection;
