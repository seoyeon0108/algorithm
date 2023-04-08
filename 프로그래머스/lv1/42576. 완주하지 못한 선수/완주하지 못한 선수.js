function solution(participant, completion) {
    let hash = {};
    
    participant.forEach(el => hash[el] = ++hash[el] || 1);
    completion.forEach(el => hash[el]--);
    
    for(let key in hash){
        if(hash[key]) return key;
    }
}