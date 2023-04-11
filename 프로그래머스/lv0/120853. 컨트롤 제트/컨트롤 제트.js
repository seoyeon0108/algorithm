function solution(s) {
    let a = s.split(' ');
    let result = 0;
    
    for(let i = 0; i < a.length; i++){
        if(Number(a[i]))result += Number(a[i]);
        if (a[i] === 'Z') result -= Number(a[i-1]);
    }
    return result;
}