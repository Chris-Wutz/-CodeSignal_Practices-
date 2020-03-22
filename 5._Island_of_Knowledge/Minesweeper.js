function minesweeper(matrix) {
    var results = [];
    for(var i = 0; i < matrix.length; i++){
        var line = [];
        for(var j = 0; j < matrix[0].length; j++){
            var numMine = 0;
            if(matrix[i+1]) {
                if((matrix[i+1][j-1]) === true){
                numMine++;
                }
                if((matrix[i+1][j]) === true){
                numMine++;
                }
                if((matrix[i+1][j+1]) === true){
                numMine++;
                }
            }
            
            if((matrix[i][j-1]) === true){
                numMine++;
            }
            
            if((matrix[i][j+1]) === true){
                numMine++;
            }
            
            if(matrix[i-1]){
               if((matrix[i-1][j-1]) === true){
                numMine++;
                }
                if((matrix[i-1][j]) === true){
                    numMine++;
                }
                if((matrix[i-1][j+1]) === true){
                    numMine++;
                } 
            }
            line.push(numMine);
        }
        results.push(line);
    }
    return results
}