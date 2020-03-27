function palindromeRearranging(inputString) {
    if(inputString.length == 1) return true;

    if(inputString.length > 0) {
        var allCharactersOnce = [];
        var allCharactersWithCount = [];

        inputString.split("").forEach(char => {
            if(!allCharactersOnce.includes(char))
                allCharactersOnce.push(char);
        })

        var countOfCharacter = 0;
        allCharactersOnce.forEach(char => {
            inputString.split("").forEach(initialChar => {
                if(initialChar == char)
                    countOfCharacter++;
            })
            allCharactersWithCount.push({char: char, count: countOfCharacter})
            countOfCharacter = 0;
        })

        if(inputString.length % 2 == 0) {

            var isOk = true;

            allCharactersWithCount.forEach(item => {
                var x = item.count % 2 !== 0;
                var y = item.count < 2;
                if(item.count % 2 !== 0 || item.count < 2)
                    isOk = false;
            })

            return isOk;

        }
        else {

            var onlyOneIsOdd = true;
            var countOfOddCharacters = 0;

            allCharactersWithCount.forEach(item => {
                if(item.count % 2 !== 0) {
                    countOfOddCharacters++;    
                }
            })

            if(countOfOddCharacters > 1) 
                onlyOneIsOdd = false;

            return onlyOneIsOdd;
        }
    }
}

