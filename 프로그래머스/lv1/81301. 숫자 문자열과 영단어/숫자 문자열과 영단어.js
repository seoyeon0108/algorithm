// function solution(s) {
//     const stringNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let plusWord = '';
//     let result = '';
    
//     for(let el of s){
//         if(Number.isNaN(+el)){
//             plusWord += el;
//             if(stringNum.includes(plusWord)){
//                 result += stringNum.indexOf(plusWord);
//                 plusWord = '';
//             }
//         }else{
//             result += el;
//         }
//     }
    
//     return +result;
// }

function solution(s) {
    s = s.replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9)
    return +s;
}