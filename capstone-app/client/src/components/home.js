import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

class Home extends React.Component {
  componentDidUpdate(previousProps) {
    const oldUserId = previousProps.match.params.id;
    const newUserId = this.props.match.params.id;
    if (newUserId === oldUserId) {
      console.log("same user ID");
    } else {
      console.log("getting new user details");
      this.props.getEntriesList(newUserId);
      this.props.getUserDetails(newUserId);
    }
  }
  render() {
    console.log(this.props.match.params.id);
    return (
      <>
        <Header />
        <section className="home">
          <h1 className="home__greeting">
            Good evening, {this.props.userDetails.username}.
          </h1>
          <h3 className="home__question">Got something on your mind?</h3>
          <Link to="/users" className="home__link">
            <span className="home__change-user">Not Daniel?</span>
          </Link>
        </section>
      </>
    );
  }
}

export default Home;
