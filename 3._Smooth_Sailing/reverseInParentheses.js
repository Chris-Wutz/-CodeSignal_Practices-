function reverseInParentheses(inputString) {
    for(var i = 0; i < inputString.length; i++) {
          if(inputString[i] === ")") {
              inputString = inputString.substring(0, i) + inputString.substring(i + 1);
              i--;
              var reversed = "";
              while(inputString[i] !== "(") {
                  reversed += inputString[i];
                  inputString = inputString.substring(0, i) + inputString.substring(i + 1);
                  i --;
              }
              inputString = inputString.substring(0, i) + reversed + inputString.substring(i + 1);
              i += reversed.length - 1;
          }
      }
      return inputString;
  }