function solution(progresses, speeds) {
    let days = progresses.map((v,idx) => {
        let day = 0;
        while(v < 100){
            v += speeds[idx];
            day++;
        }
        return day;
    })
    
    let result = []
    let max = days[0];
    let count = 1;  
    for(let i = 1; i <= days.length; i++){
        if(max >= days[i]){
            count++;
        }else{
            result.push(count);
            max = days[i];
            count = 1;
        }
    }
    
    return result;
}