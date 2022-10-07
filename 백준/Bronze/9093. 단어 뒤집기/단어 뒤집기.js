const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// 제출전 경로 수정하기 '/dev/stdin'

let num = input.shift();
let answer = "";

for (let i = 0; i < num; i++) {
    let words = input[i].split(" ");
    for (let word of words) {
      answer += `${word.split("").reverse().join("")} `;
    }
    answer += '\n'
}
console.log(answer);