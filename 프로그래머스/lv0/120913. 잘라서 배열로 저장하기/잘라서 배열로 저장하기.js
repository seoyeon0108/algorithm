function solution(my_str, n) {
    let answer = [];
    
    for(let i = 0; i < my_str.length; i+= n){
        let cutStr = my_str.slice(i , i + n)
        answer.push(cutStr);
    }
    
    return answer;
}