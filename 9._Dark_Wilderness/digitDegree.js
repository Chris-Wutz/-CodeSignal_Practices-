function digitDegree(n) {
    if(n < 10) {
        return 0;
    }

    var myArr = n.toString().split("");
    var run = true;
    var count = 0;

    while(run) {
        count++;
        var sum = 0;
        for(var i = 0; i < myArr.length; i++) {
            sum += parseInt(myArr[i]);
        }
        if(sum < 10) {
            run = false;
        }
        else {
            myArr = sum.toString().split("");
        }
    }

    return count;
}
