function solution(numbers) {
    // 양수, 음수를 분리하여 양수는 내림차순, 음수는 오름차순으로 정렬해 준다.(음수는 작은 수끼리 곱해줘야 최대값이 나오니까)
    // 양수, 음수 각각의 최댓값을 비교하여 더 큰 값을 반환한다
    const positive = numbers.filter(v => v >= 0).sort((a,b) => b - a);
    const negative = numbers.filter(v => v < 0).sort((a,b) => a - b);
    let posiMax = 0;
    let negaMax = 0;      
    
    if(positive.length <= 1 && negative.length <= 1){
        return positive[0] * negative[0];
    }
    
    if(positive.length > 1){
        posiMax = positive[0] * positive[1];
    }
    if(negative.length > 1){
        negaMax = negative[0] * negative[1];
    }
    return posiMax > negaMax ? posiMax : negaMax;
}