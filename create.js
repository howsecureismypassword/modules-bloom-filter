var fs = require('fs');
var Bloom = require('bloomfilter').BloomFilter;
var R = require('ramda');

fs.readFile( __dirname + '/passwords.txt', function (err, data) {
    var passes = data.toString().split("\n");

    var bloom = new Bloom(
      9 * passes.length, // number of bits to allocate.
      16        // number of hash functions.
    );

    R.forEach(function (pass) {
        bloom.add(pass);
    }, passes); 

    fs.writeFile(__dirname + "/bloom.json", JSON.stringify([].slice.call(bloom.buckets)), function (err) {

        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
});
