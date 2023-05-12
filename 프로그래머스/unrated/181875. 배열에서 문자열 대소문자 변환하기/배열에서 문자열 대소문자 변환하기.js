function solution(strArr) {
    return strArr.map((el,idx) => idx % 2 ? el.toUpperCase() : el.toLowerCase());
}