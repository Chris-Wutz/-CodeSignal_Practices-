function longestDigitsPrefix(x) {
    if(x[0]>'9' || x[0]<'0'||x.length == 0)
        return "";
    var count = 0;
    for(var i =0; i<x.length;i++){
        if(x[i]>'9' || x[i]<'0')break;
        else  count++;
    }
    return x.slice(0, count)
}
    