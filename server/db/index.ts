import pg from 'pg';

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || '',
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

export default client;
