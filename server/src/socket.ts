import { Server } from 'http'; // types
import * as socketio from 'socket.io';

const listen = (httpServer: Server) => new socketio.Server(httpServer);

export default { listen };