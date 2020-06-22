import React from "react";
import { Link } from "react-router-dom";

class EntriesList extends React.Component {
  componentDidMount() {
    this.props.getUserDetails(this.props.user.id);
    this.props.getEntriesList(this.props.user.id);
  }
  sortByDate(array) {
    const sortedArray = array.sort((a, b) => b.timestamp - a.timestamp);
    return sortedArray;
  }

  formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    return `${month}/${day}/${year}`;
  };

  render() {
    return (
      <>
        <div className="entries-list">
          <Link
            to={`/users/${this.props.user.id}`}
            className="entries-list__link"
          >
            <div className="entries-list__back-container">
              <span className="entries-list__back-arrow"> {"<"} </span>
              <span className="entries-list__back-text">Home</span>
            </div>
          </Link>

          <h3 className="entries-list__title">Log of Entries</h3>
          <ul className="entries-list__ul">
            {this.sortByDate(this.props.entriesList).map((entry) => (
              <li key={entry.entryId} className="entries-list__li">
                <div className="entries-list__li-text-container">
                  <h4 className="entries-list__li-title">{entry.title}</h4>
                  <p className="entries-list__li-preview">{entry.content}</p>
                </div>
                <div className="entries-list__li-emotions-chart">
                  <p className="entries-list__li-preview">
                    {this.formatDate(entry.timestamp)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default EntriesList;
