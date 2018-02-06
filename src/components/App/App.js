import React, { Component } from "react";
import axios from "axios";
import shortid from "shortid";
import style from "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
  }


  componentDidMount() {
    axios.get(`https://tubebuddy-json-api.herokuapp.com/twitter`).then(res => {
      const tweets = res.data;
      this.setState({ tweets });
    });
  }

  render() {
    return (
      <span className={style.app}>
        <span className="header">
          @tubebuddy
          <span className="icon-edit new" />
        </span>
        <ul className="notification">
          {this.state.tweets.map(tweet => (
            <li key={shortid.generate()}>
              <div className="profile">
                <img src={tweet.ThumbnailUrl} alt="profile" />
                <div classaName="hover">
                  <div className="icon-twitter" />
                </div>
              </div>
              <div className="feed">
                <div className="content">
                  <div className="retweet">
                    <div className="icon-retweet" />
                  </div>
                  <h3>@{tweet.Handle}</h3> retweeted <h3>@andrew</h3>
                  <br />
                  {tweet.Text}
                  <div className="actions">
                    <div className="icon-mail-reply action" />
                    <div className="icon-retweet action" />
                    <div className="icon-star action" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </span>
    );
  }
}

export default App;
