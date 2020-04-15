function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if(weight1 > maxW && weight2 > maxW) return 0;

    if(weight1 + weight2 > maxW) {
        if(weight1 <= maxW) {
            if(value1 >= value2 || weight2 > maxW){
                return value1;
            }
        }
        if(weight2 <= maxW) {
            if(value2 >= value1) {
                return value2;
            }
        }
    }
    return value1 + value2;
}
