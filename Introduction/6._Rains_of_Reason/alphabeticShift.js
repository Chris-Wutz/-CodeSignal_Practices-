function alphabeticShift(inputString) {
    return inputString.split("").map(char => {
        if(char.charCodeAt(0) + 1 > 122) {
            var ascii = ((char.charCodeAt(0) + 1) - 122) + 96;
            return String.fromCharCode(ascii);
        }
        else{
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }
    }).join("");
}
