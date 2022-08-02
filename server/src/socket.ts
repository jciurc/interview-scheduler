import * as http from 'http';
import { Server } from 'socket.io';

const listen = (httpServer: http.Server) => {
  const io = new Server(httpServer);
  return io;
};

export default { listen };