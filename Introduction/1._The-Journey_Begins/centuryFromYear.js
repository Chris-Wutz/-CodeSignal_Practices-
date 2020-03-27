function centuryFromYear(year) {
    let checkYear = 1;
    let checkYear2 = 100;

    let century = 0;
    let run = true;

    while(run) {
        if(year >= checkYear && year <= checkYear2) {
            century++;
            run = false;
        }
        else
        {
            century++;
            checkYear+=100;
            checkYear2+=100;
        }
    }
    
    return century;
}
