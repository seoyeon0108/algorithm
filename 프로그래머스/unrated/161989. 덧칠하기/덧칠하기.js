function solution(n, m, section) {
    let endPaint = 0;
    let count = 0;
    for(let el of section){
        if(el < endPaint) continue;
        else count++; endPaint = el + m;
    }
    
    return count;
}