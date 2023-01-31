function solution(n) {
    // 1의 갯수보다 하나 많이 나옴
    let oneLen = n.toString(2).split('1').length;
    
    while(true){
        n++;
        if(n.toString(2).split('1').length === oneLen) return n;
    }
}