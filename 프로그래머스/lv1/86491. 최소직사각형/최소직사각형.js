function solution(sizes) {
    let w = 0;
	let h = 0;
    
    for(el of sizes){
        let [a, b] = el.sort((a,b) => b - a);
        if(w < a) w = a;
        if(h < b) h = b;
        
    }
    
    return w * h;
}