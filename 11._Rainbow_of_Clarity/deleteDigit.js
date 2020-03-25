function deleteDigit(n) {
    
    var arr = n.toString().split("");
    var maxNumber = 0;

    for(var i = 0; i < arr.length; i++) {
        var num = "";
        for(var k = 0; k < arr.length; k++) {
            if(k != i) {
                num += arr[k];
            }
        }
        if(parseInt(num) > maxNumber)
            maxNumber = parseInt(num);
    }

    return maxNumber;
}
