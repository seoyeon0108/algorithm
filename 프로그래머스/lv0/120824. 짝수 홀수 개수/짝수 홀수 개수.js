function solution(num_list) {
    let count1 = 0;
    let count2 = 0
    for (el of num_list){
        if(el % 2 === 0){
            count1 += 1;
        }else{
            count2 += 1;
        }
    }
    return [count1, count2];
}