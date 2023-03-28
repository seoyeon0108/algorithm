function solution(X, Y) {
    let x = {};
    let y = {};
    
    for(let el of X){
        x[el] = ++x[el] || 1;
    }
    for(let el of Y){
        y[el] = ++y[el] || 1;
    }
    
    let sum = '';
    let keys = Object.keys(x);
    for(let v of keys){
        if(!!y[v]){
            let min = Math.min(y[v],x[v]);
            sum += v.repeat(min);
        }
    }
    
    sum = sum.split('').sort((a,b) => b-a);
    let a = sum.filter(v => v === '0').length;
    
    return sum.join('') === "" ? "-1" : (sum.join('').length === a ? "0" : sum.join(''))
}