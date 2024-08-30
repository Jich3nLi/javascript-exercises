const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
  return minuend - subtrahend;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => current * total, 1);
};

const power = function(exponent, power) {
	return Math.pow(exponent, power);
};

const factorial = function(n) {
  if (n == 0 || n ==1) {
    return 1;
  }
  else {
    return factorial(n-1) * n;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
