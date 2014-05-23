var express = require('express'),
  http = require('http'),
  path = require('path'),
  io = require('socket.io');

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res) {
  res.render('index', { title: 'Node Skeleton' });
});

var server = http.createServer(app);
var serverio = io.listen(server).set('log level', 2);
server.listen(app.get('port'));
console.log('listening on port ' + app.get('port'));

serverio.sockets.on('connection', function(socket) {
  socket.on('send', function(data) {
      serverio.sockets.emit('receive', data);
  });
});


var pingClient = function() {
  var message = "[" + Date.now() + "] Received ping from server.";
  serverio.sockets.emit('receive', message);
  console.log("Pinged client with: " + message);
}

setInterval(pingClient, 3000);
