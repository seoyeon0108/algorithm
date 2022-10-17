function solution(n, k) {
    let yang =12000 * n
    let drink =2000* (k - parseInt(n/10));
    return yang + drink;
}