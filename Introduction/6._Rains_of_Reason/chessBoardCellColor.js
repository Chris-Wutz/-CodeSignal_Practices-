function chessBoardCellColor(cell1, cell2) {
    var chessboard = [];

    for(var i = 1; i <= 8; i++) {
        var line = [];
        var playGround = true;
        for(var k = 0; k < 8; k++) {
            if(i % 2 != 0) {
                line.push(playGround);
                playGround = !playGround;
            }
            else {
                playGround = !playGround;
                line.push(playGround);
            }
        }
        chessboard.push(line);
    }

    var splitCellOne = cell1.split("");
    var splitCellTwo = cell2.split("");

    return chessboard[parseInt(splitCellOne[1])-1][getColumn(splitCellOne[0])] == chessboard[parseInt(splitCellTwo[1]-1)][getColumn(splitCellTwo[0])]
}


function getColumn(char) {
    switch(char) {
        case 'A': 
            return 0;
        case 'B':
            return 1;
        case 'C':
            return 2;
        case 'D':
            return 3;
        case 'E':
            return 4;
        case 'F':
            return 5;
        case 'G': 
            return 6;
        case 'H':
            return 7;
    }
}