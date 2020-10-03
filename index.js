const CaesarCipher = require('./caesar-cipher');


const argv = require('minimist')(process.argv.slice(2));

const { input, shift, action } = argv;
const cipher = new CaesarCipher(input, shift);

const result = cipher[action]();

console.log(result);

