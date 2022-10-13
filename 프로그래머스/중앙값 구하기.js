function solution(array) {
    let newArr = array.sort((a,b)=> a-b)
    let mid = parseInt(newArr.length/2)
    for(let i = 0; i < mid; i++){
        newArr.shift()
        newArr.pop()
    }
    return newArr[0];
}

// 
function solution(array) {
    let newArr = array.sort((a,b)=> a-b)
    return newArr[parseInt(newArr.length/2)];
}
// 이렇게 푸는것이 더 간단