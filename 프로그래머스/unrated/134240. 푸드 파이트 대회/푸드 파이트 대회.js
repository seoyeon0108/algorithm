function solution(food) {
    let countBox = [];
    let result = '';
    
    for(let i = 1; i < food.length; i++){
        let num =  parseInt(food[i]/2);
        countBox[i] = `${i}`.repeat(num);
    }
    
    result += countBox.join('')
    result += '0';
    result += countBox.reverse().join('');
    
    return result;
}