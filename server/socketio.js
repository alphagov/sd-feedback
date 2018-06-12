const socketio = require('socket.io');

module.exports.listen = app => {
  io = socketio.listen(app);
  let socket_id = [];
  io.sockets.on('connection', socket => {
    console.log('New Socket Client Connected', socket.id);
    socket_id.push(socket.id);
    if (socket_id[0] === socket.id) {
      // remove the connection listener for any subsequent
      // connections with the same ID
      io.sockets.removeAllListeners('connection');
    }
    socket.on('disconnect', () => console.log('Socket Client Disconnected'));
  });
  exports.sockets = io.sockets;
};
