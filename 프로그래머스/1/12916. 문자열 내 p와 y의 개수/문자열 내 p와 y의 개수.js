function solution(s){
    let S = s.toUpperCase();
    let P = 0;
    let Y = 0;

    for(let i = 0; i < S.length; i++){
        if(S[i] === 'P'){
            P++;
        }else if(S[i] === 'Y'){
            Y++;
        }
    }
    
    return P === Y;
}