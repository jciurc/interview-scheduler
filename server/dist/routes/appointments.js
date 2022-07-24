"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var router = require("express").Router();
module.exports = function (db, updateAppointment) {
    router.get("/appointments", function (request, response) {
        db.query("\n      SELECT\n        appointments.id,\n        appointments.time,\n        CASE WHEN interviews.id IS NULL\n        THEN NULL\n        ELSE json_build_object('student', interviews.student, 'interviewer', interviews.interviewer_id)\n        END AS interview\n      FROM appointments\n      LEFT JOIN interviews ON interviews.appointment_id = appointments.id\n      GROUP BY appointments.id, interviews.id, interviews.student, interviews.interviewer_id\n      ORDER BY appointments.id\n    ").then(function (_a) {
            var appointments = _a.rows;
            response.json(appointments.reduce(function (previous, current) {
                var _a;
                return (__assign(__assign({}, previous), (_a = {}, _a[current.id] = current, _a)));
            }, {}));
        });
    });
    router.put("/appointments/:id", function (request, response) {
        if (process.env.TEST_ERROR) {
            setTimeout(function () { return response.status(500).json({}); }, 1000);
            return;
        }
        var _a = request.body.interview, student = _a.student, interviewer = _a.interviewer;
        db.query("\n      INSERT INTO interviews (student, interviewer_id, appointment_id) VALUES ($1::text, $2::integer, $3::integer)\n      ON CONFLICT (appointment_id) DO\n      UPDATE SET student = $1::text, interviewer_id = $2::integer\n    ", [student, interviewer, Number(request.params.id)])
            .then(function () {
            setTimeout(function () {
                response.status(204).json({});
                updateAppointment(Number(request.params.id), request.body.interview);
            }, 1000);
        })["catch"](function (error) { return console.log(error); });
    });
    router["delete"]("/appointments/:id", function (request, response) {
        if (process.env.TEST_ERROR) {
            setTimeout(function () { return response.status(500).json({}); }, 1000);
            return;
        }
        db.query("DELETE FROM interviews WHERE appointment_id = $1::integer", [
            request.params.id
        ]).then(function () {
            setTimeout(function () {
                response.status(204).json({});
                updateAppointment(Number(request.params.id), null);
            }, 1000);
        });
    });
    return router;
};
