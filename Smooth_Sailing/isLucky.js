function isLucky(n) {
    var sumFirstHalf = 0;
    var sumSecondHalf = 0;

    var middle = parseInt((n.toString().length-1) / 2);

    var numArray = n.toString().split("");

    for(var i = 0; i < numArray.length; i++) {
        if(i <= middle) {
            sumFirstHalf += parseInt(numArray[i]);
        }
        else {
            sumSecondHalf += parseInt(numArray[i]);
        }
    } 
    
    return sumFirstHalf == sumSecondHalf ? true : false;
}
