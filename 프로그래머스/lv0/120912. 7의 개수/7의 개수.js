function solution(array) {
    let count = 0;
    let newArr = array.join('');
    for(let el of newArr){
        if(el === '7'){
            count += 1;
        }
    }
    return count;
}