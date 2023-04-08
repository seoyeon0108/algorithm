// function solution(name, yearning, photo) {
//     let score = {};
    
//     name.forEach((el,idx) => score[el] = yearning[idx]);
    
//     return photo.map(el => 
//                 el.reduce((acc,cur) => acc + (score[cur] ? score[cur] : 0) ,0
//             ))
// }


function solution(name, yearning, photo) {
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}