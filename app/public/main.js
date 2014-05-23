requirejs(['socket.io', 'jquery', 'jquery-ui', 'bootstrap',],
  function(io, $) {
    var loc = window.location;
    var url = location.protocol + '//' + location.hostname + ':' + location.port;
    var socket = io.connect(url);

    var processMessage = function(message) {
      console.log(message);
      $('#term').prepend("<p>" + message + "</p>");
    };

    socket.on('disconnect', function () {
     processMessage('Socket disconnected.');
    });

    socket.on('connect', function () {
     processMessage('Socket connected.');
    });

    socket.on('receive', function(message) {
        processMessage(message);
    });
  }
);
