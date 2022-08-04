import { Server } from 'http'; // types
import * as socketio from 'socket.io';

export const listen = (httpServer: Server) => {
  const server = new socketio.Server(httpServer);

  server.on('connect', () => {

  });

  return server;
};
