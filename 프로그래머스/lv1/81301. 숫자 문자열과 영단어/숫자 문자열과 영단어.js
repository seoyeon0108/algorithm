function solution(s) {
    const stringNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let plusWord = '';
    let result = '';
    
    for(let el of s){
        if(Number.isNaN(+el)){
            plusWord += el;
            if(stringNum.includes(plusWord)){
                result += stringNum.indexOf(plusWord);
                plusWord = '';
            }
        }else{
            result += el;
        }
    }
    
    return +result;
}