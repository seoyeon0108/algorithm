function solution(array, n) {
    let count = 0;
    for(el of array){
        if(el === n) count ++
    }
    return count
}