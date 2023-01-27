function solution(num_list, n) {
    let nL = num_list.length
    let answer = [];
    for(let i = 0; i < nL; i += n){
        let arr = []
        for(let j = 0; j < n; j++ ){
            let remove = num_list.shift()
            arr.push(remove)
        }
        answer.push(arr)
    }
    return answer;
}