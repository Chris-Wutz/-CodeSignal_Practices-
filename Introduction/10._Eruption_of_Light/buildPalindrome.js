function buildPalindrome(st) {

    var arrSt = st.split("");
    var reversedArr = Array.from(arrSt).reverse();
    if(arraysMatch(arrSt, reversedArr)) return st;

    var run = true;
    var counter = 0;

    var myArr = Array.from(arrSt);
    while(run) {

        for(var i = counter; i >= 0; i--) {
            myArr.push(arrSt[i]);
        }

        var myArrReversed = Array.from(myArr).reverse();
        if(arraysMatch(myArr, myArrReversed)){
             return myArr.join("")
        } else {
            myArr = Array.from(arrSt);
        }  

        if(counter == arrSt.length-1) return false;
        counter++;
    }


}

var arraysMatch = function (arr1, arr2) {

	if (arr1.length !== arr2.length) return false;

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;
};
