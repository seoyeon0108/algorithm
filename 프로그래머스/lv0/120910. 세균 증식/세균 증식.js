function solution(n, t) {
    let result = n;
    for(let i = 1; i <= t; i++){
        result = result * 2
    }
    return result;
}