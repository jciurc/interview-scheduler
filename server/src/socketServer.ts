import { Server } from 'http'; // types
import * as socketio from 'socket.io';

export const listen = (httpServer: Server) => new socketio.Server(httpServer);
