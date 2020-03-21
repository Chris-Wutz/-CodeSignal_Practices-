function matrixElementsSum(matrix) {
    var sum = 0;
    var matrixLength = matrix[0].length;
    var matrixHeigth = matrix.length;

    var arrayCheckPositionIsZero = [];

    for(var i = 0; i < matrixHeigth; i++) {
        for(var k = 0; k < matrixLength; k++) {
            if(i == 0) {
                if(matrix[i][k] != 0) {
                    sum += matrix[i][k];
                    arrayCheckPositionIsZero.push(false);
                }
                else {
                    arrayCheckPositionIsZero.push(true);
                }
            }
            else {
                if(arrayCheckPositionIsZero[k] != true) {
                    if(matrix[i][k] == 0) {
                        arrayCheckPositionIsZero[k] = true;
                    }
                    else {
                        sum += matrix[i][k];
                    }
                }
            }
        }
    }
    return sum;
}
