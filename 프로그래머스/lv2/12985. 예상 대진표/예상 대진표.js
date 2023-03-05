function solution(n,a,b){
	let A = Math.min(a,b);
    let B = Math.max(a,b);
    let count = 1;
    
    while(true){
        // A,B가 연속하는 숫자이고, B가 짝수여야 서로 붙게된다. B가 홀수면 다른 조
        if(B === (A+1) && B % 2 === 0) break;
        
        A = Math.ceil(A/2);
        B = Math.ceil(B/2);
        count ++ 
    } 
		return count;
}