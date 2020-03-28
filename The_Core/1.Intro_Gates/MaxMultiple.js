function maxMultiple(divisor, bound) { 

    while(bound % divisor != 0 && bound > 0){
        bound--;
    }

    return bound;
}
