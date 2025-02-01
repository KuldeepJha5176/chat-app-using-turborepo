"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/signup", function (req, res) {
    res.send("signup");
});
app.get("/signin", function (req, res) {
    res.send("signin");
});
app.get("/chat", function (req, res) {
    res.send("chat");
});
app.listen(3001, function () {
    console.log("Server is running on port 3000");
});
