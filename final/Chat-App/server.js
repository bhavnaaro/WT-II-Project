var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require("socket.io")(http);

var port = 8080;
app.get('/',function(req,res){
    res.sendFile(__dirname + '/');
});

io.on('connection', function(socket){
    
    socket.on('yaha',function(data){
  io.sockets.emit('yaha',data)
    });
  });
      
http.listen(port,function(){
    console.log("server running on " + port);
});
