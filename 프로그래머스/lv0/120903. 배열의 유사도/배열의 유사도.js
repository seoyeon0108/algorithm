function solution(s1, s2) {
    let answer = 0
    for(let el of s2){
        if(s1.includes(el)){
            answer += 1
        }
    }
    return answer;
}