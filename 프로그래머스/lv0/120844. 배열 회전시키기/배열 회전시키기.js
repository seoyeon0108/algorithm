function solution(numbers, direction) {
    let answer = numbers;
    if(direction === 'right') {
        let right = answer.pop()
        answer.unshift(right)
    }else {
        let left = answer.shift()
        answer.push(left)
    }
    return answer;
}