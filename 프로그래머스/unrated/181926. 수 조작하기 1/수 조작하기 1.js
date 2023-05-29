function solution(n, control) {
    let result = n;
    
    for(let s of control){
        if(s === "w") result += 1;
        else if(s === "s") result -= 1;
        else if(s === "d") result += 10;
        else if(s === "a") result -= 10;
    }
    
    return result;
}