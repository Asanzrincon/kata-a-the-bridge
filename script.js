function numMin (a, b){

    if (!b){
        return a;
    }
    return numMin(b, a%b);
    
}

