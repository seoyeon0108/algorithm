function solution(s) {
    let result = [];
    
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) result.push(s[i])
    }
    
    return result.sort().join('');
}