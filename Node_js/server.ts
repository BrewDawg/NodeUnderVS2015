/// <reference path="typings/main.d.ts" />

import * as http from "http";
import * as express from "express";

var app: express.Application = express();
var router: express.Router = express.Router();

app.set("view engine", "vash");

app.get("/", function (req: express.Request, res : express.Response) {
    res.render("index", { title: "Express + Vash" });
});

var server = app.listen(1337);

var i = 9;

//var server = http.createServer(express);
//server.listen(1337);

//module.exports = router;
