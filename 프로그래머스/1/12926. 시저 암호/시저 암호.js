function solution(s, n) {
    let big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let small = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let answer = ''
    for(let i = 0; i < s.length; i++){
        if(big.includes(s[i])){
            answer+= big[big.indexOf(s[i])+n]
        }else if(small.includes(s[i])){
            answer+= small[small.indexOf(s[i])+n]
        }else{
            answer+= ' ';
        }
    }
    return answer;
}