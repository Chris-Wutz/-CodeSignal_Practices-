function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var days = 1;

    var totalHeight = upSpeed;

    while(totalHeight < desiredHeight) {

        totalHeight+= upSpeed - downSpeed;
        days++;
    }

    return days;
}
