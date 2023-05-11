function solution(numbers, n) {
    let result = 0;
    for(let el of numbers){
        if(result > n) break;
        result += el;
    }
    return result;
}