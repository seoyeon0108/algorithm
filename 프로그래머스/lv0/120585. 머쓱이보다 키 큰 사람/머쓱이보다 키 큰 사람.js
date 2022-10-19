function solution(array, height) {
    let count = 0;
    for(el of array){
        if(el > height) count++
    }
    return count;
}