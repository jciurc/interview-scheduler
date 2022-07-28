import * as fs from 'fs';
import * as path from 'path';

// = get env variables =
import * as dotenv from 'dotenv';
const ENV = process.env.NODE_ENV || 'development';
const PATH = path.resolve(__dirname, './.env.' + ENV);
dotenv.config({ path: PATH });

// = modules =
import express, { Express, Request, Response } from 'express';
import * as http from 'http';
import WebSocket1 from 'ws';
import cors from 'cors';
import helmet from 'helmet';
import db from './db';

// = routes =
import days from './routes/days';
import appointments from './routes/appointments';
import interviewers from './routes/interviewers';

// = functions =
const read = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: 'utf-8' }, (error, data) => {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const updateAppointment = (id, interview) => {
  wss.clients.forEach(function eachClient(client) {
    if (client.readyState === WebSocket1.OPEN) {
      client.send(
        JSON.stringify({
          type: 'SET_INTERVIEW',
          id,
          interview
        }));
    };
  });
};


// = server config =
const PORT = process.env.PORT || 8001;
const app: Express = express();
const server = http.Server(app);
const wss = new WebSocket1.Server({ server });

app.use(cors());
app.use(helmet());
app.use(express.json())

app.use('/api', days(db));
app.use('/api', appointments(db, updateAppointment));
app.use('/api', interviewers(db));

// seed database
if (ENV === 'development' || ENV === 'test') {
  Promise.all([
    read(path.resolve(__dirname, `db/schema/create.sql`)),
    read(path.resolve(__dirname, `db/schema/${ENV}.sql`))
  ])
    .then(([create, seed]) => {
      app.get('/api/debug/reset', (request, response) => {
        db.query(create)
          .then(() => db.query(seed))
          .then(() => {
            console.log('Database Reset');
            response.status(200).send('Database Reset');
          });
      });
    })
    .catch(error => {
      console.log(`Error setting up the reset route: ${error}`);
    });
};

app.close = () => db.end();

// web sockets
wss.on('connection', socket => {
  socket.onmessage = event => {
    console.log(`Message Received: ${event.data}`);

    if (event.data === 'ping') {
      socket.send(JSON.stringify('pong'));
    }
  };
});

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT} in ${ENV} mode.`);
});