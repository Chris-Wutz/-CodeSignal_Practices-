function commonCharacterCount(s1, s2) {
    var copyOfs1 = s1;
    var copyOfs2 = s2;
    var countOfSameCharacters = 0;

    var lengthOfS1 = copyOfs1.length;

    var i = 0; 
    
    while(i < lengthOfS1) {

        var char = copyOfs1[i];

        if(copyOfs2.includes(char)) {
            countOfSameCharacters++;
            copyOfs2 = copyOfs2.replace(char, "");
        }

        i++;
    }

    return countOfSameCharacters;
}