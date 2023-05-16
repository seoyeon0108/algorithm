function solution(my_string, indices) {
    return my_string.split('').reduce((acc, cur, idx) => acc + (indices.includes(idx) ? '': cur), '');
}