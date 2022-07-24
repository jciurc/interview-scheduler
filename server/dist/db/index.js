"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
var client = new pg_1["default"].Client({
    connectionString: process.env.DATABASE_URL || '',
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});
client
    .connect()["catch"](function (e) { return console.log("Error connecting to Postgres server:\n".concat(e)); });
exports["default"] = client;
