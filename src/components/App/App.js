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
//https://tubebuddy-json-api.herokuapp.com/twitter
  componentDidMount() {
    axios.get(`http://localhost:3000/Twitter`).then(res => {
      const tweets = res.data;
      this.setState({ tweets });
    });
  }

  render() {
    return (
      <span class={style.app}>
        <span class="header">
          @tubebuddy
          <span class="icon-edit new" />
        </span>
        <ul class="notification">
          {this.state.tweets.map(tweet => (
            <li key={shortid.generate()}>
              <div class="profile">
                <a href={`http://twitter.com?${tweet.Handle}` }><img src={tweet.ThumbnailUrl} alt="profile" />
                <div class="hover">
                  <div class="icon-twitter" />
                </div>
                </a>
              </div>
              <div class="feed">
                <div class="content">
                  <div class="retweet">
                    <div class="icon-retweet" />
                  </div>
                  <p class="username">{tweet.Name}</p>
                  <span class="title">@{tweet.Handle}</span> retweeted <span class="title">@andrew</span>
                   <br /><span class="text">{tweet.Text}</span>
                  <div class="actions">
                    <div class="icon-mail-reply action" />
                    <div class="icon-retweet action" />
                    <div class="icon-star action" />
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
