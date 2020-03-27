function evenDigitsOnly(n) {
    
    var arr = n.toString().split("");

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) 
            return false;
    }

    return true;
}
