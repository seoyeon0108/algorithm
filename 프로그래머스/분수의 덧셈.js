function solution(denum1, num1, denum2, num2) { // denum은 분모, num은 분자
    var answer = [0, 0];
    let first = num1 * denum2 + num2 * denum1;
    let second = num1 * num2;
    let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); //유클리드 호제법에 따른 최대공약수 구하는 방법
    let min = gcd(first, second);
    answer[0] = first / min;
    answer[1] = second / min;
  
    return answer;
  }
