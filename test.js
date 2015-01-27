"use strict";

/**
 * Testing Libraries
 */
var buster = require("buster");
var assert = buster.referee.assert;

/**
 * Setup
 */
var exists = require("./exists");
var R = require("ramda");

/**
 * Tests
 */
var passes = require("./passwords");

passes(function (err, passes) {
    buster.testCase("bloom-filter", {
        "should exist": function () {
            R.forEach(function (pass) {
                assert.equals(exists(pass), true);
            }, passes);
        },
        "shouldn't exist": function () {
            var attempt = [
                "catapult123",
                "monkeymonkeymonkey",
                "fisheggs",
                "9&*hkj230s9d8f",
            ];

            R.forEach(function (pass) {
                assert.equals(exists(pass), false);
            }, attempt);
        }
    });
});
