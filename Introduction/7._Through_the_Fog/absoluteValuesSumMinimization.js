function absoluteValuesSumMinimization(a) {
    var allSums = [];

    for(var i = 0; i < a.length; i++) {
        var sum = 0;
        for(var k = 0; k < a.length; k++) {
            sum += Math.abs(a[k] - a[i]);
        }
        allSums.push({num: a[i], sum: sum})
    }

    var numberToReturn = allSums[0].num;
    var actuallLowest = allSums[0].sum;

    for(var i = 1; i < allSums.length; i++) {
        if(allSums[i].sum < actuallLowest) {
            numberToReturn = allSums[i].num;
            actuallLowest = allSums[i].sum;
        }
    }

    return numberToReturn;
}
