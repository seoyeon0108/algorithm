function solution(my_string, num1, num2) {
    let answer = [...my_string];
    let a = answer[num1];
    let b = answer[num2];
    answer[num1] = b;
    answer[num2] = a;
    return answer.join('');
}