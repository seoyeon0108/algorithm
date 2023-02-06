function solution(i, j, k) {
    let count = 0;
        
    for(let a = i; a <= j; a++){
        let oneCheck = [...a.toString()].filter(v => v === `${k}`);
        count += oneCheck.length;
    }
    
    return count;
}