function bishopAndPawn(bishop, pawn) {
    var posBishop = {x: getNumberForChar(bishop.split("")[0]), y: parseInt(bishop.split("")[1])-1 }
    var posPawn = {x: getNumberForChar(pawn.split("")[0]), y: parseInt(pawn.split("")[1])-1 }

    //leftupper
    var x = posBishop.x;
    var y = posBishop.y;
    while(y + 1 < 8 && x - 1 >= 0){
        x--;
        y++;
        if(x == posPawn.x && y == posPawn.y) return true;
    }

    //rightupper
    var x = posBishop.x;
    var y = posBishop.y;
    while(y + 1 < 8 && x + 1 < 8) {
        y++;
        x++;
        if(x == posPawn.x && y == posPawn.y) return true;
    }

    //rightdown
    var x = posBishop.x;
    var y = posBishop.y;
    while(y - 1 >= 0 && x + 1 < 8){
        y--;
        x++;
        if(x == posPawn.x && y == posPawn.y) return true;
    }

    //leftdown
    var x = posBishop.x;
    var y = posBishop.y;
    while(x - 1 >= 0 && y - 1 >= 0){
        y--;
        x--;
        if(x == posPawn.x && y == posPawn.y) return true;
    }

    return false;
}

function getNumberForChar(char) {
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
