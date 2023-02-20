function solution(s, n) {
    let answer = s.split('');
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    
    answer = answer.map(v => {
        // 대문자 판별
        let a = v.toUpperCase();
        let idx = 0;
        
        if(v === ' ') return ' ';
        
        if(v === a){
            idx = upper.indexOf(v);
            return upper[(idx + n) % 26];
        }else{
            idx = lower.indexOf(v);
            return lower[(idx + n) % 26];
        }
    }) 
    return answer.join('');
}