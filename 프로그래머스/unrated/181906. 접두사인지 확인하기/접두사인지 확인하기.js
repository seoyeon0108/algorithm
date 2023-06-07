function solution(my_string, is_prefix) {
    for(let i = 1; i <= my_string.length; i++){
        const check = my_string.slice(0, i);
        if(check === is_prefix) return 1;
    }
    return 0;
}