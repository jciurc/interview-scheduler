<<<<<<< HEAD
import * as express from 'express';
const router = express.Router();

const interviewersRoutes = (db) => {
  router.get('/interviewers', (request, response) => {
=======
const router = require("express").Router();

module.exports = db => {
  router.get("/interviewers", (request, response) => {
>>>>>>> 7a2c01f48d63bef3216340d2cf5251fd5efc12cd
    db.query(`SELECT * FROM interviewers`).then(({ rows: interviewers }) => {
      response.json(
        interviewers.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  return router;
};
<<<<<<< HEAD

export default interviewersRoutes;
=======
>>>>>>> 7a2c01f48d63bef3216340d2cf5251fd5efc12cd
