function solution(my_string) {
    let alp = my_string.toLowerCase()
    return [...alp].sort().join('');
}