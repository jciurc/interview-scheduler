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
module.exports = function (db) {
    router.get("/interviewers", function (request, response) {
        db.query("SELECT * FROM interviewers").then(function (_a) {
            var interviewers = _a.rows;
            response.json(interviewers.reduce(function (previous, current) {
                var _a;
                return (__assign(__assign({}, previous), (_a = {}, _a[current.id] = current, _a)));
            }, {}));
        });
    });
    return router;
};
