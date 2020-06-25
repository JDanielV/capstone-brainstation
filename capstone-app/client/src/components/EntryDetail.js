import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EntryDetail extends React.Component {
  apiLink = "http://localhost:5000";
  usersEndpoint = "/users";

  state = {
    entryDetails: {},
    showButton: false,
  };

  toggleDeleteButton = () => {
    let { showButton } = this.state;
    showButton = !showButton;
    this.setState({
      showButton,
    });
  };

  handleDelete = (id, entryId) => {
    axios
      .delete(`${this.apiLink}${this.usersEndpoint}/${id}/entries/${entryId}`)
      .then((response) => {
        console.log(response);
        this.props.history.push(`/users/${this.state.entryDetails.id}/entries`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onDelete = () => {
    this.handleDelete(
      this.state.entryDetails.id,
      this.state.entryDetails.entryId
    );
  };

  getEntryDetails = (id, entryId) => {
    axios
      .get(`${this.apiLink}${this.usersEndpoint}/${id}/entries/${entryId}`)
      .then((response) => {
        this.setState({ entryDetails: response.data });
      });
  };

  componentDidMount() {
    this.getEntryDetails(
      this.props.match.params.id,
      this.props.match.params.entryId
    );
  }

  render() {
    const moodArray = [];
    if (this.state.entryDetails.netural === true) moodArray.push("Neutral");

    if (this.state.entryDetails.joyful === true) moodArray.push("Joyful");

    if (this.state.entryDetails.motivated === true) moodArray.push("Motivated");

    if (this.state.entryDetails.satisfied === true) moodArray.push("Satisfied");

    if (this.state.entryDetails.stressed === true) moodArray.push("Stressed");

    if (this.state.entryDetails.sad === true) moodArray.push("Sad");

    if (this.state.entryDetails.angry === true) moodArray.push("Angry");

    const { entryDetails } = this.state;
    return (
      <section className="entry-detail">
        <Link
          to={`/users/${entryDetails.id}/entries`}
          className="entries-list__link"
        >
          <div className="entry-detail__back-container">
            <span className="entries-list__back-arrow"> {"<"} </span>
            <span className="entries-list__back-text">Entries</span>
          </div>
        </Link>
        <h3 className="entry-detail__title">{entryDetails.title}</h3>
        <div className="entry-detail__content-context-wrapper">
          <div className="entry-detail__content">{entryDetails.content}</div>
          <div className="entry-detail__context-moods-wrapper">
            <p className="entry-detail__context">
              Context 1: {entryDetails.contextOne}
            </p>
            <p className="entry-detail__context">
              Context 2: {entryDetails.contextTwo}
            </p>
            <p className="entry-detail__moods">Mood: {moodArray.join(", ")}</p>
          </div>
          <div className="entry-detail__delete-btn-container">
            <div
              className="entry-detail__delete-btn-bg"
              onClick={this.toggleDeleteButton}
            >
              <img
                src="/bin.png"
                className="entry-detail__delete-btn"
                alt="delete icon"
              />
            </div>
            <button
              style={
                this.state.showButton
                  ? { display: "block" }
                  : { display: "none" }
              }
              id="entry-detail__toggle-btn"
              className="entry-detail__delete-button"
              onClick={this.onDelete}
            >
              Delete Entry
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default EntryDetail;
