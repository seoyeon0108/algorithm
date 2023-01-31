function solution(n) {
    let oneLen = [...(n).toString(2)].filter(v => v === '1').length
    let bigN = 0;
    
    while(oneLen != bigN){
        n++;
        bigN = [...(n).toString(2)].filter(v => v === '1').length
    }
    
    return n;
}