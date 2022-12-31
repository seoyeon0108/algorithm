function solution(before, after) {
    const newFun = (v) => v.split('').sort().join('');
    return newFun(before) === newFun(after) ? 1 : 0;
}