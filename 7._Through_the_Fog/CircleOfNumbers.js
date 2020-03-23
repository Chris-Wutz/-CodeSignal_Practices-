function circleOfNumbers(n, firstNumber) {
    var halfOfN = n / 2;
    var result = 0;

    if(firstNumber+halfOfN > n) {
        result =  (firstNumber+halfOfN) - n;
    } else
        result = firstNumber+halfOfN;

    return result === n ? 0 : result;
}
