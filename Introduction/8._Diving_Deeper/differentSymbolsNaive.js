function differentSymbolsNaive(s) {

    var allCharactersOnce = [];

    return s.split("").filter(char => {
        if(!allCharactersOnce.includes(char)){
            allCharactersOnce.push(char)
            return char;
        }
    }).length;
}
