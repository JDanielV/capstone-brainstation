import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ user, entriesList }) => {
  if (user.id === undefined) {
    return <p>.</p>;
  }
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__ul">
          <NavLink
            to="/users/:id/new-entry"
            className="header__link"
            activeClassName="header__link--active"
          >
            <li className="header__li">New Entry</li>
          </NavLink>
          <span className="header__ul-separator">|</span>
          <NavLink
            to={`/users/${user.id}/entries`}
            className="header__link"
            activeClassName="header__link--active"
          >
            <li className="header__li">Browse Journal</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
