function solution(rsp) {
    var answer = '';
    for(let el of rsp){
        if(el === '2'){
            answer += '0'
        }else if(el === '0'){
            answer += '5'
        }else {
            answer += '2'
        }
    }
    return answer;
}