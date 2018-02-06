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
  //http://localhost:3000/Twitter
  componentDidMount() {
    axios.get(`https://tubebuddy-json-api.herokuapp.com/twitter`).then(res => {
      const tweets = res.data;
      this.setState({ tweets });
    });
  }

  render() {
    return (
      <span class={style.app}>
        <span class="header">
          <span class="handle">@tubebuddy</span>
          <span class="icon-twitter toggle" />
          <span class="icon-edit new" />
        </span>
        <ul class="notification">
          {this.state.tweets.map(tweet => (
            <li key={shortid.generate()}>
              <div class="profile">
                <img src={tweet.ThumbnailUrl} alt="profile" />
                <div class="hover">
                <a href={`http://twitter.com?${tweet.Handle}` }><div class="icon-twitter" />  </a>
                </div>
              </div>
              <div class="feed">
                <div class="content">
                  <div class="retweet">
                    <div class="icon-retweet" />
                  </div>
                  <p class="username">{tweet.Name}</p>
                  <span class="title">@{tweet.Handle}</span> retweeted <span class="title">@andrew</span>
                   <br /><span class="text">{tweet.Text}</span>
                   {/* <br /><span class="text">{tweet.Date}</span> */}
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
