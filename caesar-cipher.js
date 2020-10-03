class CaesarCipher {
    constructor(str, shift) {
        this.str = str;
        this.shift = shift;
        this._sign = 0;
        this._upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this._lower = "abcdefghijklmnopqrstuvwxyz";
    }

    checkChar(char) {
      if (!this._upper.includes(char) && !this._lower.includes(char)) {
        console.log(`checkChar: case 1, char: ${this._lower.includes(char)}`);
        return char;
      } else {
        console.log('checkChar: case 2');
        const source = this._upper.includes(char) ? this._upper : this._lower;
        const step = this.shift % 26;
        const direction = this._sign === 0 ? step : step * this._sign;
        return source[source.indexOf(char) + direction];
      }
    }

    passingAlphabet() {
      const inData = this.str.split('');
      const result = inData.map((chr) => this.checkChar(chr));
      return result.join('');
    }

    encode() {
      this._sign = 1;
      return this.passingAlphabet();
    }

    decode() {
      this._sign = -1;
      return this.passingAlphabet();
    }
}

module.exports = CaesarCipher;