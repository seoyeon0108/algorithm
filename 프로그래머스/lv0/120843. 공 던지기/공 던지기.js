function solution(numbers, k) {
    let count = 1;
    let idx = 0;
    
    while(count !== k){
        idx += 2;
        idx = idx % numbers.length;
        count++;
    }
    
    return numbers[idx];
}