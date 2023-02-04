function solution(left, right) {
    let answer = [];
    for(let i = left; i <= right; i++ ){
        let divisor = [];
        for(let j = 1; j <= Math.sqrt(i); j++){
            if (i % j === 0) {
                divisor.push(j)
                if( i / j != j){
                    divisor.push(i/j)
                }
            }
        }
        answer.push(divisor);
    }
    return answer.reduce((acc,cur)=> acc + (cur.length % 2 ? -Math.max(...cur) : Math.max(...cur)), 0);
}