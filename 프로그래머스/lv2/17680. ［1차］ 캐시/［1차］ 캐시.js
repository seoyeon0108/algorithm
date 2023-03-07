function solution(cacheSize, cities) {
    let cache = [];
    let runTime = 0;
    
    cities.forEach((e) => {
        e = e.toLowerCase();
        if(cache.includes(e)) {
            runTime++;
            cache.splice(cache.indexOf(e),1);
        } else {
            runTime += 5;
        }
        cache.push(e);
        if(cache.length > cacheSize) cache.shift();
    })
    
    return runTime;
}