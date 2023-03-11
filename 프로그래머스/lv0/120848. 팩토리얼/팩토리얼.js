function solution(n) {
    let result = 1;
    let count = 1;
    
    while( result * count < n){
        count++;
        result *= count;
    }
    
    return count;
}