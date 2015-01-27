# How Secure Is My Password
## Bloom Filter

Uses [bloomfilter.js](https://github.com/jasondavies/bloomfilter.js) to work out whether it is likely that a given string exists in the [Cain & Abel](http://www.oxid.it/cain.html) password dictionary. If a word is contained in the password dictionary it will always return `true`. If it is not then it will *probably* return `false` - however, false positives are possible.

### Setup
Use `node create` to create the `bloom.json` file from the `passwords.txt` file. The `passwords.txt` file should contain one password per line.

### Usage

```javascript
var exists = require("bloom-filter");

console.log(exists("0racl3")); // true
console.log(exists("87K*&ksd089")); // probably false - will depend on settings
```