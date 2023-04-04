function solution(n, lost, reserve) {
    let count = n - lost.length;
    
    // 정렬해주는 이유는.. 5,[4,2],[3,5] 인 경우 4한테 3이 빌려주면 2는 5한테 빌릴수 없음... 2한테 3이 빌려주고, 4한테 5가 빌려주도록 해야함
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    let reserveBox = []; // 여분을 가지고 있는 학생 담는 박스
    
    for(let el of reserve){
        let lostIdx = lost.indexOf(el);
        if(lostIdx != -1){ // el이 lost에 포함될때
            lost.splice(lostIdx,1);
            count++;
        }else reserveBox.push(el);
    }
    
    //여벌 가져온 학생이 도난당한경우
    // for(let el of reserve){
    //     let lostIdx = lost.indexOf(el);
    //     let reserveIdx = reserve.indexOf(el);
    //     if(lostIdx != -1){
    //         lost.splice(lostIdx,1);
    //         reserve.splice(reserveIdx,1);
    //         count++;
    //     }
    // }
    
    for(let a of reserveBox){
        for(let b of lost){
            if(a + 1 === b || a - 1 === b){
                count++;
                lost.shift();
            }
        }
    }
    
    return count;
}