function sortByHeight(a) {
    var positionOfTheTrees = [];
    var onlyHeihtsOfThePeople = [];
    var resultOfReposition = [];

    for(var i = 0; i < a.length; i++){
        if(a[i] == -1) {
            positionOfTheTrees.push(i);
        }
        else {
            onlyHeihtsOfThePeople.push(a[i]);
        }
    }

    onlyHeihtsOfThePeople.sort(function(a, b){return a-b});

    for(var i = 0; i < a.length; i++) {
        if(positionOfTheTrees.includes(i)){
            resultOfReposition.push(-1);
        }
        else{
            resultOfReposition.push(onlyHeihtsOfThePeople.shift());
        }
    }

    return resultOfReposition;
}
