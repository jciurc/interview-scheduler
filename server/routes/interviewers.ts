import * as express from 'express';
const router = express.Router();

const interviewersRoutes = (db) => {
  router.get('/interviewers', (request, response) => {
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

export default interviewersRoutes;
