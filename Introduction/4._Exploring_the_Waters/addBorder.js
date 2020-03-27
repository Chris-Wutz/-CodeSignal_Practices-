function addBorder(picture) {
    var lengthOfLongestWord = 0;
    var result = [];

    picture.forEach(word => { if(word.length > lengthOfLongestWord) lengthOfLongestWord = word.length; });

    result.push("*".repeat(lengthOfLongestWord+2));

    picture.forEach(word => {
        if(word.length < lengthOfLongestWord) {
            var length = lengthOfLongestWord - word.length;
            result.push("*".repeat(length/2) + word + "*".repeat(length/2));
        }
        else {
            result.push("*" + word + "*");
        }
    })

    result.push("*".repeat(lengthOfLongestWord+2));

    return result;
}

