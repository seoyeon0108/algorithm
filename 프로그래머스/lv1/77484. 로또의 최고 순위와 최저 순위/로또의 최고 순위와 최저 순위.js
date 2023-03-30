function solution(lottos, win_nums) {
    // 당첨되었을지도 모르는 숫자, 당첨된 숫자가 몇개인지 주해주고 최고, 최저예상을 구해준다.
    const matchNum = [6,6,5,4,3,2,1] 
    
    let unknown = lottos.filter(v => !v).length;
    let winning = lottos.filter(v => win_nums.includes(v)).length;
    
    return [matchNum[winning + unknown], matchNum[winning]];
}