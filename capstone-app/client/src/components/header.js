import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, entriesList }) => {
  if (user.id === undefined) {
    return <p>.</p>;
  }
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__ul">
          <Link to="/users/:id/new-entry" className="header__link">
            <li className="header__li">New Entry</li>
          </Link>
          <span className="header__ul-separator">|</span>
          <Link to={`/users/${user.id}/entries`} className="header__link">
            <li className="header__li">Browse Journal</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
