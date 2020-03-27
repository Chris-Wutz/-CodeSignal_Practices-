function validTime(time) {

    var arr = time.split(':');

    if(!(parseInt(arr[0]) >= 0 && parseInt(arr[0]) < 24)) return false;
    if(!(parseInt(arr[1]) >= 0 && parseInt(arr[1]) < 60)) return false;

    return true;
}
