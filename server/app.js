var express = require('express');
var app = new express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//middleware
app.use(express.static('public'));

//test dummy
app.get('/hello', function(req, res){
  res.status(200).send("Hello Node.js");
});

//Validate that a client is connected
io.on('connection', function (socket) {
  console.log("somebody is connected with socket");
  socket.emit('messages', {
     id: "1",
    author: "Wilmer",
    text: "Hi!!!, this a test socket.io!!!"});

  socket.on('new-message', function (data) {
    console.log(data);
  });
});

server.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
