const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// 제출전 경로 수정하기 '/dev/stdin' 
let num = input.shift();
let result = [];

// '('와 ')'의 개수를 카운트하여 '('기호 일 시 1을 더해주고 ')'기호일 시  1을 뺴준다.
// 만약 VPS 인 문자열일 시 '(' 기호와 ')' 개수가 서로 딱 떨어지므로 0이 나오게 된다.
// 단, 예외가 있다. ")))(((" 인 경우를 제외해 줘야 한다. 그러므로 state가 음수가 되는 순간 예외처리가 필요하다.

for(let i = 0; i < num; i++){
    let count = 0;

    for (let s of input[i]) { // for..of는 문자열에대해서도 가능
        count += s === "(" ? 1 : -1;
        
         if (count < 0) break;
    }
    result.push(count === 0 ? 'YES' : "NO");
}

console.log(result.join('\n'));