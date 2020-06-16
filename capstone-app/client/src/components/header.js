import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">New Entry</li>
          <span className="header__ul-separator">|</span>
          <li className="header__li">Browse Journal</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
