function solution(n) {
    let stepTwo = [...n.toString(3)].reverse().join('')
    return parseInt(stepTwo, 3);
}