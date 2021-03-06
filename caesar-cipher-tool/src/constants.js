const paramsErrors = {
  action: 'Please, input which action do you prefer - encode or decode',
  shift: 'Please, input valid shift an integer, greater or equal of zero',
  input: 'Please, input correct path to input file',
  output: 'Please, input correct path to output file',
};

const filesErrors = {
  input: 'Please, input correct path to existing input file or give to the file relevant permissions',
  output: 'Please, input correct path to existing output file or give to the file relevant permissions',
};

module.exports = {
  paramsErrors,
  filesErrors,
};