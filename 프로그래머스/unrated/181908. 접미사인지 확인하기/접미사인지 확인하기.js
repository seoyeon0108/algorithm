function solution(my_string, is_suffix) {
    let check = my_string.slice(-is_suffix.length);
    return +(check === is_suffix);
}