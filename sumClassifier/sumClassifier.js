function sumClassifier(numbers) {
  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }

  if (sum > 10) {
    return "Large Sum";
  } else if (sum === 10) {
    return "Equal Sum";
  } else {
    return "Small Sum";
  }
}

module.exports = sumClassifier;
