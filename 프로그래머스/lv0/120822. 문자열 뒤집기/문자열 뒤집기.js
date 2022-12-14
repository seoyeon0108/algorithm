function solution(my_string) {
    let answer = '';
    let num = my_string.length
    for(let i = 1; i <= num; i++){
        answer = answer + my_string[num-i]
    }
    return answer;
}