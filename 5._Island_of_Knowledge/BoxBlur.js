function boxBlur(image) {
    var result = [];

    for(var i = 1; i < image.length -1; i++) {
        var lineArray = [];
        for(var k = 1; k < image[i].length-1; k++) {
            var total = 0;

            total += image[i-1][k-1];
            total += image[i-1][k];
            total += image[i-1][k+1];

            total += image[i][k-1];
            total += image[i][k];
            total += image[i][k+1];

            total += image[i+1][k-1];
            total += image[i+1][k];
            total += image[i+1][k+1];

            lineArray.push(parseInt(total/9));
        }
        result.push(lineArray);
    }
    return result;
}
