var socket = io();
var handle = document.getElementById("handle");
var message = document.getElementById("message");
var btn = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");


btn.addEventListener('click',function(){
 socket.emit('yaha',{message:message.value,handle:handle.value})
});
socket.on('yaha',function(data){
    output.innerHTML+="<li><strong><em>"+data.handle +" :</em></strong>"+data.message+"</li>";
});
// io.sockets.emit('a user connected');
// socket.on('disconnect', function(){
//    io.sockets.emit('user disconnected');
// });