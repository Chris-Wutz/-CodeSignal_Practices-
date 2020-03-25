function chessKnight(cell) {
    var pos = {x: getCellNum(cell.split("")[0]), y: parseInt(cell.split("")[1])-1};

    var moves = 0;

    //left
    if(pos.x - 2 >= 0) {
        if(pos.y + 1 < 8) moves++;
        if(pos.y - 1 >= 0) moves++;
    }

    //upper
    if(pos.y + 2 < 8) {
        if(pos.x + 1 < 8) moves++;
        if(pos.x - 1 >= 0) moves++;
    }

    //right
    if(pos.x + 2 < 8) {
        if(pos.y + 1 < 8) moves++;
        if(pos.y - 1 >= 0) moves++;
    }

    //down
    if(pos.y - 2 >= 0) {
        if(pos.x - 1 >= 0) moves++;
        if(pos.x + 1 < 8) moves++;
    }

    return moves;
}

function getCellNum(char) {
    switch(char) {
        case 'a':
            return 0;
        case 'b': 
            return 1;
        case 'c':
            return 2;
        case 'd':
            return 3;
        case 'e':
            return 4;
        case 'f':
            return 5;
        case 'g':
            return 6;
        case 'h':
            return 7;
    }
}