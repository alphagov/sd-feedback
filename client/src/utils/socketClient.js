import openSocket from 'socket.io-client';

const socketClient = () => {
  const socket = openSocket('http://localhost:5060');
};

export default socketClient;
