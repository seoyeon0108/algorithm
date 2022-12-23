function solution(order) {
    // let answer = order.toString().split('')
    // answer.filter(el => Number(el) % 3 === 0 && Number(el)!=0);
    // return answer.length;
    //위의 방법으로는 잘 진행되지 않음..왜일까
    
    let result = []
    let answer = order.toString();
    for(let el of answer){
        if(Number(el) % 3 === 0 && Number(el)!=0){
            result.push(el)
        }
    }
    return result.length;
}