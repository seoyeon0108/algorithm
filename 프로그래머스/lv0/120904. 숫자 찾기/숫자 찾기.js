function solution(num, k) {
    let result = num.toString().indexOf(k);
    if(result === -1){
        return result;
    }
    return result+1;
}