import React from "react";
import { Link, withRouter } from "react-router-dom";
import MoodChart from "./MoodChart";

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

    return `${month + 1}/${day}/${year}`;
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

          <MoodChart entriesList={this.props.entriesList} />

          <h3 className="entries-list__title">Log of Entries</h3>
          <ul className="entries-list__ul">
            {this.sortByDate(this.props.entriesList).map((entry) => (
              <li key={entry.entryId} className="entries-list__li">
                <div className="entries-list__li-text-container">
                  <Link
                    to={`/users/${entry.id}/entries/${entry.entryId}`}
                    className="entries-list__li-link"
                  >
                    <h4 className="entries-list__li-title">{entry.title}</h4>
                  </Link>
                  <div className="entries-list__li-timestamp-container">
                    <p className="entries-list__li-timestamp">
                      {this.formatDate(entry.timestamp)}
                    </p>
                  </div>
                </div>
                <p className="entries-list__li-preview">{entry.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(EntriesList);
