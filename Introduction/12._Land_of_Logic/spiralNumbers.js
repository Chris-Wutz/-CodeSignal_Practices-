function spiralNumbers(n) {
    var nMax =  n * n;
    var arrayMap = [];
    
    function initializeSpiralArray() {
        var newArray = [];
        function getsomeArray() {
            var tempArray = [];
            for (var i = 0; i < n; i++) {
                tempArray.push(0);
            }
            return tempArray;
        }
        for (var i = 0; i < n; i++) {
            newArray.push(getsomeArray());
        }
        return newArray;
    }
    var spiralArray = initializeSpiralArray();
    
    var k = 1;
    var direction = 'right';
    for (var i = 0; i < nMax; i++) {
        if (i === 0) {
            valueX = 0;
            valueY = 0;
        }
        if (k % 2 === 1) {
            if (direction == 'right') {
                if (!arrayMap.includes(JSON.stringify([valueX, valueY])) && valueX <= n - 1 && valueX >= 0) {
                    arrayMap.push(JSON.stringify([valueX, valueY]));
                    spiralArray[valueY][valueX] = i + 1;
                    valueX++;
                }
                else {
                    k++;
                    valueX--;
                    valueY++;
                    direction = 'down';
                    arrayMap.push(JSON.stringify([valueX, valueY]));
                    spiralArray[valueY][valueX] = i + 1;
                    valueY++;
                }  
            }
            else if (direction == 'left') {
                if (!arrayMap.includes(JSON.stringify([valueX, valueY])) && valueX >= 0 && valueX <= n - 1) {
                    arrayMap.push(JSON.stringify([valueX, valueY]));
                    spiralArray[valueY][valueX] = i + 1;
                    valueX--;
                }
                else {
                    k++;
                    valueX++;
                    valueY--;
                    direction = 'up';
                    arrayMap.push(JSON.stringify([valueX, valueY]));
                    spiralArray[valueY][valueX] = i + 1;
                    valueY--;
                }
            }
        }
        else {
            if (direction == 'down') {
                if (!arrayMap.includes(JSON.stringify([valueX, valueY])) && valueY <= n - 1 && valueY >= 0) {
                    arrayMap.push(JSON.stringify([valueX, valueY]));
                    spiralArray[valueY][valueX] = i + 1;
                    valueY++;
                }
                else {
                    k++;
                    valueY--;
                    valueX--;
                    direction = 'left';
                    arrayMap.push(JSON.stringify([valueX, valueY]));
                    spiralArray[valueY][valueX] = i + 1;
                    valueX--;    
                }  
            }
            else if (direction == 'up') {
                if (!arrayMap.includes(JSON.stringify([valueX, valueY])) && valueY >= 0 && valueY <= n - 1) {
                    arrayMap.push(JSON.stringify([valueX, valueY]));
                    spiralArray[valueY][valueX] = i + 1;
                    valueY--;
                }
                else {
                    k++;
                    valueY++;
                    valueX++;
                    direction = 'right';
                    arrayMap.push(JSON.stringify([valueX, valueY]));
                    spiralArray[valueY][valueX] = i + 1;
                    valueX++;
                }
            }
        }
    }
    console.log('Array Map Coordinates: ');
    console.log(arrayMap);
    console.log('\n')
    console.log('Spiral Array: ');
    console.log(spiralArray);
    return spiralArray;
}
