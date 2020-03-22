function avoidObstacles(inputArray) {
    inputArray.sort(function(a, b){return a-b})

    var run = true;
    var largestElement = inputArray[inputArray.length-1];
    var smallestElement =inputArray[0];
    var jump = 0

    var steps = 1;

    while(run) {
        jump = 0;
        jump += steps;
        
        while (jump < largestElement){
            if(!inputArray.includes(jump)){
                if(jump > largestElement) {
                    return steps;
                }
                jump += steps;
            }
            else
                break;
        }

        if(jump > largestElement) return steps;

        steps++;
    }   
}

avoidObstacles([19, 32, 11, 23])