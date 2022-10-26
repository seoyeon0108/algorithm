const input = require('fs').readFileSync('/dev/stdin').toString();
// 제출전 경로 수정하기 '/dev/stdin'
let alp = 'abcdefghijklmnopqrstuvwxyz'

let result = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] // const counts = new Array(26).fill(0); 이렇게 하면 쉬워짐...

for(el of input){
    let idx = alp.indexOf(el)
    result[idx] += 1
}
console.log(result.join(' '));