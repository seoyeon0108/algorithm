function solution(array) {
    let newArr = array.sort((a,b)=> a-b)
    return newArr[parseInt(newArr.length/2)];
}