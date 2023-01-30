function solution(n) {
    let answer = 1;
    while(answer * 6 % n){
        answer += 1;
    }
    return answer;
}