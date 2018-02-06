import React, { Component } from "react";
import axios from "axios";
import shortid from "shortid";
import style from "./App.css";
const port = process.env.PORT || 3000;

const command = `json-server --watch db.json --port ${port}`

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
  }
  
  componentDidMount() {
    axios.get(command).then(res => {
      const tweets = res.data;
      this.setState({ tweets });
    });
  }

  render() {
    return (
      <span className={style.app}>
        <span className="first">
          @tubebuddy
          <span className="icon-edit new" />
        </span>
        <ul className="timeline">
          {this.state.tweets.map(tweet => (
            <li key={shortid.generate()}>
              <div className="avatar">
                <img src={tweet.ThumbnailUrl} alt="avatar" />
                <div classaName="hover">
                  <div className="icon-twitter" />
                </div>
              </div>
              <div className="bubble-container">
                <div className="bubble">
                  <div className="retweet">
                    <div className="icon-retweet" />
                  </div>
                  <h3>@{tweet.Handle}</h3> retweeted <h3>@doug</h3>
                  <br />
                  {tweet.Text}
                  <div className="over-bubble">
                    <div className="icon-mail-reply action" />
                    <div className="icon-retweet action" />
                    <div className="icon-star" />
                  </div>
                </div>
                {/* <div className="arrow" /> */}
              </div>
            </li>
          ))}
        </ul>
      </span>
    );
  }
}

export default App;
