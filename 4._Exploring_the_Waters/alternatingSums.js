function alternatingSums(a) {
    var sumTeamOne = 0;
    var sumTeamTwo = 0;

    for(var i = 1; i <= a.length; i++) {
        if(i % 2 == 0) {
            sumTeamTwo += a[i-1];
        }
        else {
            sumTeamOne += a[i-1];
        }
    }

    return [sumTeamOne, sumTeamTwo]
}
