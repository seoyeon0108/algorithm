function solution(num_list) {
    const multiply = num_list.reduce((acc,cur) => acc * cur, 1);
    const plus = num_list.reduce((acc,cur) => acc + cur, 0);
    
    return multiply < plus * plus ? 1 : 0 ;
}