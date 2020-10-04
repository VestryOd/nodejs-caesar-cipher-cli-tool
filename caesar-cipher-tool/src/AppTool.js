const { pipeline } = require('stream');
const fs = require('fs');
const path = require('path');
const TransformCaesarCipher = require('./TransformCaesarCipher');

class AppTool {
  constructor(props) {
    this.checkProps(props);
    this.shift = parseInt(props.shift, 10);
    this.input = props.input;
    this.output = props.output;
    this.action = props.action;
  }

  checkProps(props) {
    if (!props.shift || props.shift <= 0 || typeof props.shift !== 'number') {
      throw 'Please, input valid shift an integer, greater or equal of zero';
    }
    if (!props.action || (props.action !== 'encode' && props.action !== 'decode')) {
      throw 'Please, input which action do you prefer - encode or decode';
    }
  }

  render() {
    pipeline(
      this.input ? fs.createReadStream(this.input) : process.stdin,
      new TransformCaesarCipher({
        shift: this.shift,
        action: this.action
      }),
      this.output
        ? fs.createWriteStream(this.output, { flags: 'a' })
        : process.stdout,
      err => {
        if (err) {
          throw new Error(err);
        }
      }
    );
  }
};

module.exports = AppTool;