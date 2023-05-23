function solution(str1, str2) {
    var answer = 0;
    return str2.split(str1).join('') === str2 ? 0 : 1;
}