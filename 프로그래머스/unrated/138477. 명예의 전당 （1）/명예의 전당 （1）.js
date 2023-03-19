function solution(k, score) {
    let hallOfFame = [];
    let rsultScore = [];
    
    for(let el of score){
        hallOfFame.push(el);
        hallOfFame.sort((a,b) => b - a);
        hallOfFame = hallOfFame.slice(0,k);
        rsultScore.push(Math.min(...hallOfFame));
    }
    return rsultScore;
}