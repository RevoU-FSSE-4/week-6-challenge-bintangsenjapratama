function sumOfSquares(num1, num2) {
  function squares(number) {
    return number ** 2;
  }
  return squares(num1) + squares(num2);
}

module.exports = sumOfSquares;
