"use strict";

var Bloom = require("bloomfilter").BloomFilter;
var filter = require("./bloom");

var tester = new Bloom(filter, 16);

module.exports = function (text) {
    return tester.test(text);
};

