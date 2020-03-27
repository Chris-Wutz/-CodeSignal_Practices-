function adjacentElementsProduct(inputArray) {
    var greatestProduct = 0;

    for(var i = 0; i < inputArray.length; i++) {
        if(i == 0) {
            greatestProduct = inputArray[i] * inputArray[i+1];
        }
        else if(i <= inputArray.length-2){
        var product = inputArray[i] * inputArray[i+1];
        if(product > greatestProduct)
            greatestProduct = product;
        }
    }

    return greatestProduct;
}
