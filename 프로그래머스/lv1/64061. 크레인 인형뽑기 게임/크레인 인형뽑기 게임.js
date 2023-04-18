function solution(board, moves) {
    let hash = {};
    let bucket = [];
    let count = 0;
    
    // 위치 별로 인형 위치 재정렬
    for(let i = board.length-1; i >= 0; --i){
        board[i].forEach((v,idx) => 
                         v ? (hash[idx+1] ? hash[idx+1].push(v) : hash[idx+1] = [v]) : ''); 
    }
                    
    for(let move of moves){
        if(hash[move]){
            let doll = hash[move].pop();
            if(doll){
                bucket.push(doll);
                let lastDoll = bucket.length-1; 
                if(bucket[lastDoll] === bucket[lastDoll-1]){
                    bucket.pop();
                    bucket.pop();
                    count += 2;
                }
            }
        }
    }
    
    return count;
}