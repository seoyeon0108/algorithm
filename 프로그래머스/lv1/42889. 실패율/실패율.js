function solution(N, stages) {
    let result = [];
    for(let i = 1; i <= N; i++){
        let arrivalP = stages.filter(v => v >= i).length;
        let notClearP = stages.filter(v => v === i).length;
        let v = arrivalP === 0 ? 0 : notClearP / arrivalP;
        result.push(v);
    }
    
    let answer = [];
    for(let j = 0; j < result.length; j++){
        let max = Math.max(...result);
        let idx = result.indexOf(max);
        answer.push(idx+1)
        result.splice(idx, 1, -1);
    }
    return answer;
}