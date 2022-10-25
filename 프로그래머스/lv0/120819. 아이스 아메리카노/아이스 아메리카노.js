function solution(money) {
    let count = parseInt(money/5500)
    let change = money % 5500
    return [count, change];
}