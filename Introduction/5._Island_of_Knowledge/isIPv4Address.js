function isIPv4Address(inputString) {
    var pieces = inputString.split(".");
    if(pieces.length == 4){
        for(var i = 0; i < pieces.length; i++){
            var reg = /^\d+$/;
            if(reg.test(pieces[i]) && (pieces[i].split("0").length - 1) <= 1){
                if(pieces[i].length > 1) {
                    if(pieces[i][0] == "0"){
                        return false;
                    }
                    else{
                        var number = parseInt(pieces[i]);
                        if(!(number >= 0 && number <= 255))
                            return false; 
                    } 
                }
            }else{
                return false;
            }

        }   
    }else {
    return false;
    }

    return true;
}
