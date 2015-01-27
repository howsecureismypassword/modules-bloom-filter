"use strict";

var fs = require("fs");
var config = require("./config");
var passes = require("./passwords");
var Bloom = require("bloomfilter").BloomFilter;
var R = require("ramda");

passes(function (err, passes) {
    var bloom = new Bloom(9 * passes.length, config.hashes);
    R.forEach(R.bind(bloom.add, bloom), passes);
    fs.writeFile(__dirname + "/bloom.json", JSON.stringify([].slice.call(bloom.buckets)));
});
