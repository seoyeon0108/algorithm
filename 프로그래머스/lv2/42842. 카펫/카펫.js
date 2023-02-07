function solution(brown, yellow) {
    const answer = [0, 0];
    
    for(let i = 1; i <= Math.sqrt(yellow); i++){
        let divisor = [0,0];
        if(yellow % i === 0){
            divisor[0] = yellow/i + 2;
            divisor[1] = i + 2;
        }
        
        if(divisor[0]*divisor[1] === brown + yellow){
            answer[0] = divisor[0]
            answer[1] = divisor[1]
        }
    }
        
    return answer;
}