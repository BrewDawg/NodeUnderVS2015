/// <reference path="typings/main.d.ts" />
"use strict";
var express = require("express");
var app = express();
var router = express.Router();
app.set("view engine", "vash");
app.get("/", function (req, res) {
    res.render("index", { title: "Express + Vash" });
});
var server = app.listen(1337);
var i = 9;
//var server = http.createServer(express);
//server.listen(1337);
//module.exports = router;
//# sourceMappingURL=server.js.map