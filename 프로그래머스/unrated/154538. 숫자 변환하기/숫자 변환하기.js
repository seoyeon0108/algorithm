
function solution(x, y, n) {
    let result = -1;
    const q = [];
    q.push([y, 0]);
    
    while(q.length !== 0){
        const [value, step] = q.shift();
        if(value === x) {
            result = step;
            break;
        }
        
        
        if(value % 2 === 0 ) q.push([value / 2, step + 1]);
        if(value % 3 === 0 ) q.push([value / 3, step + 1]);
        if(value - n >= x) q.push([value - n, step + 1]);
    }
 
    return result;
}