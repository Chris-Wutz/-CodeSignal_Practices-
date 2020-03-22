function areSimilar(a, b) {
    var sortedA = a.slice(0).sort().join('');
    var sortedB = b.slice(0).sort().join('');
    console.log(a,b);
    if(sortedA == sortedB){
        var count = 0;
        for(var i = 0; i<a.length; i++){
            if(a[i] !== b[i]){
                count++;
            }
        }
        return count<=2;
        } else {
            return false;
        }
  }