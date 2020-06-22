import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EntryDetail extends React.Component {
  apiLink = "http://localhost:5000";
  usersEndpoint = "/users";

  state = {
    entryDetails: {},
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
    const { entryDetails } = this.state;
    return (
      <section className="entry-detail">
        <h3 className="entry-detail__title">{entryDetails.title}</h3>
        <div className="entry-detail__content-context-wrapper">
          <div className="entry-detail__content">{entryDetails.content}</div>
          <div className="entry-detail__context-wrapper"></div>
        </div>
      </section>
    );
  }
}

export default EntryDetail;
