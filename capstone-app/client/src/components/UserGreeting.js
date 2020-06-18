import React from "react";
import { Link } from "react-router-dom";

const UserGreeting = ({ user }) => {
  return (
    <div className="home__greeting-container">
      <h1 className="home__greeting">Good evening, {user.username}.</h1>
      <h3 className="home__question">Got something on your mind?</h3>
      <Link to="/users" className="home__link">
        <span className="home__change-user">Not {user.username}?</span>
      </Link>
    </div>
  );
};

export default UserGreeting;
