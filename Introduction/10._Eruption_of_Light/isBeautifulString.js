function isBeautifulString(inputString) {
    inputString = inputString.split('');
    var numOccurance = 0;
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var alphabetCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      
    for(var i = 0; i < inputString.length; i++){
      alphabetCount[alphabet.indexOf(inputString[i])]++;
    }
      
    for(var j = 1; j < alphabetCount.length; j++){
      if(alphabetCount[j-1] < alphabetCount[j]){
        return false;
      }
    }
    return true;
  }

  isBeautifulString("bbc");