function sudoku(grid) {
    var arr = [];
    var sqr = [];
  
    for(var i = 0 ; i < grid.length; i++){
      if(grid[i].indexOf(1) == -1 || grid[i].indexOf(2) == -1 || grid[i].indexOf(3) == -1 || grid[i].indexOf(4) == -1 || grid[i].indexOf(5) == -1 || grid[i].indexOf(6) == -1 || grid[i].indexOf(7) == -1 || grid[i].indexOf(8) == -1 || grid[i].indexOf(9) == -1){
        return false;
      }
  
      arr.push([]);
  
      for(var j = 0 ; j < grid.length; j++){
       arr[i].push(grid[j][i]);
       if((i == 0 || i == 3 || i == 6) && (j == 0 || j == 3 || j == 6)){
         sqr.push([grid[i][j],grid[i+1][j],grid[i+2][j],grid[i][j+1],grid[i+1][j+1],grid[i+2][j+1],grid[i][j+2],grid[i+1][j+2],grid[i+2][j+2]]);
       }
      }
  
      if(arr[i].indexOf(1) == -1 || arr[i].indexOf(2) == -1 || arr[i].indexOf(3) == -1 || arr[i].indexOf(4) == -1 || arr[i].indexOf(5) == -1 || arr[i].indexOf(6) == -1 || arr[i].indexOf(7) == -1 || arr[i].indexOf(8) == -1 || arr[i].indexOf(9) == -1){
        return false;
      }
      if(sqr[i].indexOf(1) == -1 || sqr[i].indexOf(2) == -1 || sqr[i].indexOf(3) == -1 || sqr[i].indexOf(4) == -1 || sqr[i].indexOf(5) == -1 || sqr[i].indexOf(6) == -1 || sqr[i].indexOf(7) == -1 || sqr[i].indexOf(8) == -1 || sqr[i].indexOf(9) == -1){
        return false;
      }
    }
    return true;
  }