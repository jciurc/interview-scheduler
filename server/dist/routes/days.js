"use strict";
var router = require("express").Router();
module.exports = function (db) {
    router.get("/days", function (request, response) {
        db.query("\n      SELECT\n        days.id,\n        days.name,\n        array_agg(DISTINCT appointments.id) AS appointments,\n        array_agg(DISTINCT available_interviewers.interviewer_id) AS interviewers,\n        (SELECT sum(CASE WHEN interviews.id IS NULL THEN 1 ELSE 0 END) FROM appointments LEFT JOIN interviews ON interviews.appointment_id = appointments.id WHERE appointments.day_id = days.id)::int AS spots\n      FROM days\n      JOIN appointments ON appointments.day_id = days.id\n      JOIN available_interviewers ON available_interviewers.day_id = days.id\n      GROUP BY days.id\n      ORDER BY days.id\n    ").then(function (_a) {
            var days = _a.rows;
            response.json(days);
        });
    });
    return router;
};
