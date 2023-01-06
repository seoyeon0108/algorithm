function solution(n) {
    var nStr = n.toString();
    var answer = [];
    for( let i = nStr.length-1; i >= 0; i-- ) {
      answer.push(Number(nStr[i]));
    }
    return answer;
}