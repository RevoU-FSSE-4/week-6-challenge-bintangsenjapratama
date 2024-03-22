function sumOfEven(numbers) {
  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const isEvenNumber = element % 2 === 0;

    if (isEvenNumber) {
      sum += element;
    }
  }

  return sum;
}

module.exports = sumOfEven;
