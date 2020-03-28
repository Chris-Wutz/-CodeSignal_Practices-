function circleOfNumbers(n, firstNumber) {
    return n / 2 + firstNumber < n ? n / 2 + firstNumber : Math.abs(n - (n / 2 + firstNumber));
}
