function extraNumber(a, b, c) {
    let arr = [a, b ,c];
    for(let i = 0; i < arr.length; i++) {
        if(arr.filter(e => e === arr[i]).length === 1) return arr[i];
    }
}
