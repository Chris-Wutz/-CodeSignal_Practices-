function candies(n, m) {
    while(true) {
        if(m % n == 0) {
            return m;
        }
        m--;
    }
}
