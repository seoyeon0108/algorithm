function solution(n, m) {
    let gcd = cal_gcd(n, m)
    return [gcd, n * m / gcd ];
}

// 최대공약수 
function cal_gcd(a, b) {
    return a % b ? cal_gcd(b, a % b) : b
}