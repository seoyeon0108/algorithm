function solution(my_string, n) {
    var answer = '';
    for(let el of my_string){
        for(let i = 0; i < n; i++)
        answer += el
    }
    return answer;
}