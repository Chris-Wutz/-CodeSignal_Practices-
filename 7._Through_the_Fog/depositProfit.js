function depositProfit(deposit, rate, threshold) {
    var amountOfYears = 0;

    while(deposit < threshold) {
        deposit *= 1 + rate / 100;
        amountOfYears++;
    }

    return amountOfYears;
}
