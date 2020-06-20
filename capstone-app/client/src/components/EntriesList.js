import React from "react";
import { Link } from "react-router-dom";

const EntriesList = ({ user, entriesList }) => {
  return (
    <>
      <div className="entries-list">
        <Link to={`/users/${user.id}`} className="entries-list__link">
          <div className="entries-list__back-container">
            <span className="entries-list__back-arrow"> {"<"} </span>
            <span className="entries-list__back-text">Back</span>
          </div>
        </Link>

        <h3 className="entries-list__title">Log of Entries</h3>
        <ul className="entries-list__ul">
          {entriesList.map((entry) => (
            <li key={entry.entryId} className="entries-list__li">
              <div className="entries-list__li-text-container">
                <h4 className="entries-list__li-title">{entry.title}</h4>
                <p className="entries-list__li-preview">{entry.content}</p>
              </div>
              <div className="entries-list__li-emotions-chart"></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EntriesList;
