function sumOfSquares(num1, num2) {
  function squares(num) {
    return num ** 2;
  }
  return squares(num1) + squares(num2);
}

module.exports = sumOfSquares;
