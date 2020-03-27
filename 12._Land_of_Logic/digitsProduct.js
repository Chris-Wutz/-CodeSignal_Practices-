function digitsProduct(product) {
    var answerDigits = [];
    var answer = 0;
    if (!product) {
        return 10;
    }
    if (product === 1) {
        return 1;
    }
    for (var divisor = 9; divisor > 1; divisor--) {
        while (product % divisor === 0) {
            product /= divisor;
            answerDigits.push(divisor);
        }
    }
    console.log(answerDigits);
    if (product > 1) {
        return -1;
    }
    for (var i = answerDigits.length - 1; i >= 0; i--) {
        answer = answer + answerDigits[i] * Math.pow(10, i);
    }
    return answer;
}