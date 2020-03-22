function arrayChange(inputArray) {
    var lowest = inputArray[0];
    var count = 0;
      for (var i = 1; i<inputArray.length; i++){
        if(lowest >= inputArray[i]){
          count = count + ((lowest+1) - inputArray[i]);
          inputArray[i] += ((lowest+1) - inputArray[i]);
        }
        lowest = inputArray[i];
      }
      return count;
  }