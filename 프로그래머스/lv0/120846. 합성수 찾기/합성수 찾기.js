function solution(n) {
    // 합성수 개수 = n - 소수 개수
    let PrimeN = 1;
    for(let i = 2; i <= n; i++){
        let a = [];
        
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i%j === 0){
                a.push(j);
                if(i/j != j){
                    a.push(i/j)
                }
            } 
        }
        if(a.length === 2) PrimeN++;
    }
    return n - PrimeN;
}