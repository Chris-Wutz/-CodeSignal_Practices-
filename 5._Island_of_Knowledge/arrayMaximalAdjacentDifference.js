function arrayMaximalAdjacentDifference(inputArray) {

    if(inputArray.length == 1) return inputArray[i];

    var absoluteDifference = 0;

    for(var i = 0; i < inputArray.length; i++) {

        var difference = 0;

        if(i == 0){
            difference = inputArray[i] - inputArray[i+1];
            if(difference > absoluteDifference) absoluteDifference = difference;
            difference = inputArray[i+1] - inputArray[i];
            if(difference > absoluteDifference) absoluteDifference = difference;
        }

        if(i > 0 && i <= inputArray.length-2) {
            difference = inputArray[i-1] - inputArray[i];
            if(difference > absoluteDifference) absoluteDifference = difference;
            difference = inputArray[i] - inputArray[i-1];
            if(difference > absoluteDifference) absoluteDifference = difference;
            difference = inputArray[i+1] - inputArray[i];
            if(difference > absoluteDifference) absoluteDifference = difference;
            difference = inputArray[i] - inputArray[i+1];
            if(difference > absoluteDifference) absoluteDifference = difference;
        }

        if(i == inputArray.length-1) {
            difference = inputArray[i] - inputArray[i+1];
            if(difference > absoluteDifference) absoluteDifference = difference;
            difference = inputArray[i+1] - inputArray[i];
            if(difference > absoluteDifference) absoluteDifference = difference;
        }
    }

    return absoluteDifference;
}
