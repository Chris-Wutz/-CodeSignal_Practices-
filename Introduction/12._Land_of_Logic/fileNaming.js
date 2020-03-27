function messageFromBinaryCode(code) {

    var message = "";
    var subCode = "";

    for(var i = 0; i < code.length; i++){

        subCode += code[i];
        if(subCode.length == 8) {
            message += String.fromCharCode(parseInt(subCode, 2));
            subCode = "";
        }

    }

    return message;
}
