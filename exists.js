"use strict";

var Bloom = require("bloomfilter").BloomFilter;
var filter = require("./bloom");
var config = require("./config");

var tester = new Bloom(filter, config.hashes);

module.exports = function (text) {
    return tester.test(text);
};

