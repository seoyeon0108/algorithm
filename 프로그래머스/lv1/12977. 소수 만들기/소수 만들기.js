function solution(nums) {
    let n = Math.max(...nums);
    let sieve = Array(3 * n + 1).fill(true).fill(false, 0, 2); 
    for(let i = 2 ; i * i <= sieve.length; i++){
        if(sieve[i]){
            for(let j = i * i; j <= sieve.length; j+=i){ 
                sieve[j] = false;
            }
        }
    }
    
    let answer = 0;
    
    for(let i = 0; i < nums.length-2; i++){
        for(let j = i + 1; j < nums.length-1; j++){
            for(let k = j + 1; k < nums.length; k++){
                let plusNum = nums[i] + nums[j] + nums[k];
                if(sieve[plusNum]) answer++;
            }
        }
    }
    
    return answer;
}
