# TubeBuddy_JSON
TubeBuddy JSON, AXIOS, REACT

Requirements:

Node.js
npm


This project is a working prototype in progress. A Demo is currently deployed on Heroku 

### Fake Prod

[APP](https://tubebuddy-notify.herokuapp.com/)

[Mock Server](https://tubebuddy-json-api.herokuapp.com/)



### Local Settings:

* To run the app with custom JSON server:

### clone the repo:
`git clone https://github.com/amponce/TubeBuddy_JSON.git`


### CD into TubeBuddy_JSON
`cd TubeBuddy_JSON`


### Install node modules
`npm install`


1 `npm run api` The JSON Server is configured to run locally on port:3004 in package.json 
2 In new terminal window `npm start` the app loads data from http://localhost:3004/Twitter
3 The data is configured to use faker.js and attributes can be modified inside of server/server.js

### Optional:

If you chose not to run your own instance of JSON server simply keep the AXIOS.get path in `src/components/App/App.js` as `https://tubebuddy-json-api.herokuapp.com/`



### Start the APP
`npm start`



### App Screenshot

![Tubebuddy Twitter Prototype](https://github.com/amponce/TubeBuddy_JSON/blob/master/Screenshots/tubebuddy.jpg)  

* Best viewed on desktop | (currently this is not a mobile prototype) 
