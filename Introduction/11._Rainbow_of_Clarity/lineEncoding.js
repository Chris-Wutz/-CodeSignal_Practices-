function lineEncoding(s) {
    var splitet = [];
    var myArr = s.split("");
    var result = "";

    var char = myArr[0];

    for(var i = 1; i < myArr.length; i++) {

        if(char.includes(myArr[i])) {
            char += myArr[i];
        }else {
            splitet.push(char);
            char = myArr[i];
        }
        if(i == myArr.length-1) splitet.push(char);
    }

    splitet.forEach(item => {
        if(item.length > 0 && item.length != 1) {
            result += item.length + item[0];
        }else{
            result += item;
        }
    })

    return result;
}
