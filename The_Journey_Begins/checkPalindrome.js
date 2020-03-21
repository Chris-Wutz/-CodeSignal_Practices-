function checkPalindrome(inputString) {
    var reversedString = inputString.split("").reverse().join("");

    console.log(reversedString);

    if(reversedString == inputString) 
        return true;

    return false;
}