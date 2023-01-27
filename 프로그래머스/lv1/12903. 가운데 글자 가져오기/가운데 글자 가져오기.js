function solution(s) {
    let sLen = s.length
    let oddN = parseInt(sLen/2)
    let evenN = sLen/2
    return sLen % 2 ? s.slice(oddN, oddN+1) : s.slice(evenN-1, evenN+1) ;
}