node-quickstart
=============

A quickstart package to get a node app up and running.

To install dependencies, run:

    npm install

*Server*

The server runs a basic setup with Express and Jade, and by default makes a websocket connection to all clients. For convenience, underscore and bunyan are also installed.

To run the server:

    node web.js

*Client*

The client is configured with require.js, has a websocket client, and comes installed with jquery, jquery-ui, bootstrap, and underscore.

By default, all the client does is establish a connnection, receive pings from the server, and prints them to the user in a terminal-like visualization.

*Deployment*

The app should be easy to deploy to heroku. If you are using heroku-accounts, configure your account for the repository:

    git config heroku.account personal

To set up the app, run:

    heroku create node-skeleton
    heroku config:add BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs
    heroku labs:enable websockets
    heroku ps:scale web=1

For a demo of the functionality, visit: [http://node-skeleton.herokuapp.com/](http://node-skeleton.herokuapp.com/)
