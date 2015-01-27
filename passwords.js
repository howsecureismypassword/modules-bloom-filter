"use strict";

var fs = require("fs");

module.exports = function (callback) {
    fs.readFile( __dirname + "/passwords.txt", function (err, data) {
        var passes = data.toString().split("\n");
        callback(err, passes);
    });
};
