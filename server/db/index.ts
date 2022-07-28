<<<<<<< HEAD
import * as pg from 'pg';
=======
import pg from 'pg';
>>>>>>> 7a2c01f48d63bef3216340d2cf5251fd5efc12cd

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || '',
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client
  .connect()
<<<<<<< HEAD
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));
=======
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));
>>>>>>> 7a2c01f48d63bef3216340d2cf5251fd5efc12cd

export default client;
