function shapeArea(n) {
    var area = 1
    
    for(var i = 2; i < n+1; i++) {
        area += (i-1)*4
    }
     
    return area
}