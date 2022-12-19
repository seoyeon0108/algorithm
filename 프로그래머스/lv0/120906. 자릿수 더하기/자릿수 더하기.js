function solution(n) {
    let answer = n.toString().split('');
    let result = 0;
    for(let el of answer){
        result += Number(el)
    }
    return result;
}