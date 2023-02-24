function solution(array, commands) {
    let result = [];
    
    for(let el of commands){
        // el[0] : i , el[1] : j, el[0] : k
        let newArr = array.slice(el[0]-1, el[1]).sort((a,b) => a-b);
        result.push(newArr[(el[2]-1)]);
    }
    
    return result;
}