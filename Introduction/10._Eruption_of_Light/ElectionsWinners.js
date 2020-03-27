function electionsWinners(votes, k) {

    var mostRecentVotes = Array.max(votes);

    var whoCanWin = 0;

    var countSame = 0;

    for(var i = 0; i < votes.length; i++) {
        if(votes[i] + k > mostRecentVotes || votes[i] == mostRecentVotes) {
            if(votes[i] == mostRecentVotes && k === 0)
            {
                whoCanWin++;
                countSame++;
            }else {
                whoCanWin++;
            }
        }
            
    }


    if(countSame > 1) return 0;
    return whoCanWin;


}

Array.max = function( array ){
    return Math.max.apply( Math, array );
};
