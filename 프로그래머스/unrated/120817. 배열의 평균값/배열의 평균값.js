function solution(numbers) {
    let sum = 0;
    let num = numbers.length
    for(let i = 0; i < num; i++){
        sum += numbers[i]/num;
    }
    return sum;
}
