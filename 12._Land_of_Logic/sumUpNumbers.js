function sumUpNumbers(inputString) {
    var allNumbers = [];
    var arrInput = inputString.split("");
    
    var mychar = "";
    
    for(var i = 0; i < arrInput.length; i++) {

        if(new RegExp('[0-9]').test(arrInput[i])) {
            mychar += arrInput[i];
        } else {
            if(mychar != "") {
                allNumbers.push(parseInt(mychar));
                mychar = "";
            }
        }
        if(i == arrInput.length-1) {
            if(mychar != "")
                allNumbers.push(parseInt(mychar));
        }
    }

    if(allNumbers.length > 0) 
        return allNumbers.reduce((pv, cv) => pv + cv, 0);
    return 0;
}
