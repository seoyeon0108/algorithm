function solution(n) {
    let dp = [0,1,2];
    
    for(let i = 3; i <= n ; i++){
        dp[i] = (dp[i-2] + dp[i-1]) % 1234567;
    }
    return dp[n];
}