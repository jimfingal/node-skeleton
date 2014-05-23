heroku create node-skeleton
heroku ps:scale web=1
heroku config:add BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs
heroku labs:enable websockets
