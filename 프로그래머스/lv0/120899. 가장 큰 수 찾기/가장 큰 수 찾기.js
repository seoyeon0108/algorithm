function solution(array) {
    let maxNum = 0;
    for(let i = 0; i < array.length; i++){
        if(parseInt(array[i]) > maxNum){
            maxNum = array[i]
        }
    }  
    return [maxNum, array.indexOf(maxNum)];
}