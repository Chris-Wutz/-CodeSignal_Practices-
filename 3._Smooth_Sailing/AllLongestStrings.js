function allLongestStrings(inputArray) {
    var maxLength = 0;

    inputArray.forEach(st => {
        if(st.length > maxLength)
            maxLength = st.length;
    })

    inputArray = inputArray.filter(elem => elem.length == maxLength);

    return inputArray;
}
