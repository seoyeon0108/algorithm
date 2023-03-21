function solution(s) {
    let answer = [];
    const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
    arr.sort((a,b) => a.length - b.length);
    
    for(let i of arr){
        for(let j of i){
            if(!answer.includes(j)) answer.push(j);
        }
    }
    
    return answer;
}
