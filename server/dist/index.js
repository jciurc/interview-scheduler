"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
// = get env variables =
var dotenv_1 = require("dotenv");
var ENV = process.env.NODE_ENV || 'development';
var PATH = path_1["default"].resolve(__dirname, './.env.' + ENV);
dotenv_1["default"].config({ path: PATH });
// = modules =
var express_1 = require("express");
var http_1 = require("http");
var ws_1 = require("ws");
var cors_1 = require("cors");
var helmet_1 = require("helmet");
var db_1 = require("./db");
// = routes =
var days_1 = require("./routes/days");
var appointments_1 = require("./routes/appointments");
var interviewers_1 = require("./routes/interviewers");
// = functions =
var read = function (file) {
    return new Promise(function (resolve, reject) {
        fs_1["default"].readFile(file, { encoding: 'utf-8' }, function (error, data) {
            if (error)
                return reject(error);
            resolve(data);
        });
    });
};
var updateAppointment = function (id, interview) {
    wss.clients.forEach(function eachClient(client) {
        if (client.readyState === ws_1["default"].OPEN) {
            client.send(JSON.stringify({
                type: 'SET_INTERVIEW',
                id: id,
                interview: interview
            }));
        }
        ;
    });
};
// = server config =
var PORT = process.env.PORT || 8001;
var app = (0, express_1["default"])();
var server = http_1["default"].Server(app);
var wss = new ws_1["default"].Server({ server: server });
app.use((0, cors_1["default"])());
app.use((0, helmet_1["default"])());
app.use(express_1["default"].json());
app.use('/api', (0, days_1["default"])(db_1["default"]));
app.use('/api', (0, appointments_1["default"])(db_1["default"], updateAppointment));
app.use('/api', (0, interviewers_1["default"])(db_1["default"]));
// seed database
if (ENV === 'development' || ENV === 'test') {
    Promise.all([
        read(path_1["default"].resolve(__dirname, "db/schema/create.sql")),
        read(path_1["default"].resolve(__dirname, "db/schema/".concat(ENV, ".sql")))
    ])
        .then(function (_a) {
        var create = _a[0], seed = _a[1];
        app.get('/api/debug/reset', function (request, response) {
            db_1["default"].query(create)
                .then(function () { return db_1["default"].query(seed); })
                .then(function () {
                console.log('Database Reset');
                response.status(200).send('Database Reset');
            });
        });
    })["catch"](function (error) {
        console.log("Error setting up the reset route: ".concat(error));
    });
}
;
app.close = function () { return db_1["default"].end(); };
// web sockets
wss.on("connection", function (socket) {
    socket.onmessage = function (event) {
        console.log("Message Received: ".concat(event.data));
        if (event.data === "ping") {
            socket.send(JSON.stringify("pong"));
        }
    };
});
server.listen(PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(PORT, " in ").concat(ENV, " mode."));
});
