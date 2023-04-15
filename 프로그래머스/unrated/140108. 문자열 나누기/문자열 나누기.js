function solution(s) {
    let hash = {};
    let count = 0;

    let first = s[0];
    for(let i = 0; i < s.length; i++){
        if(s[i] === first) hash[first] = ++hash[first] || 1 ;
        else hash['else'] = ++hash['else'] || 1;
        
        if(hash[first] === hash['else']) {
            count++;
            hash[first] = 0; 
            hash['else'] = 0;
            if(!!s[i+1])first = s[i+1];
        }
    }
    
    if(hash[first] != hash['else']) count++;
    return count;
}