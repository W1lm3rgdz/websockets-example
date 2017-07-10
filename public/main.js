
  var socket = io.connect('http://localhost:8080', {'forceNew': true });

  function render(data){

    var html = `<div>
                  <strong>${data.author}</strong>:
                  <em>${data.text}</em>
                </div>`;

    document.getElementById('messages').innerHTML = html;
  }

  socket.on('messages', function (data) {
    console.log(data);
    render(data);
  });

function addMessage(m){
    var payload = {
      author : document.getElementById('username').value,
      text : document.getElementById('text').value
    };
    socket.emit('new-message', payload);
    return false;
}
