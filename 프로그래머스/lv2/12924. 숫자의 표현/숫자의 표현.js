function solution(n) {
// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 주어진 수의 홀수인 약수 갯수는 같다. 는 공식을 이용한 문제이다
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) answer++;
    }
    return answer;
}