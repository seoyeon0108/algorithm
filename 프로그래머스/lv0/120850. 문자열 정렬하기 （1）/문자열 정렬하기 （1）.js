function solution(my_string) {
    let result = my_string.replace(/[^0-9]/g,'').split('')
    return result.map(el => Number(el)).sort((a,b) => a-b);
}