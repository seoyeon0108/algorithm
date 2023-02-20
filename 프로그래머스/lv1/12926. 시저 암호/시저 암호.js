// function solution(s, n) {
//     let answer = s.split('');
//     let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let lower = 'abcdefghijklmnopqrstuvwxyz'
    
//     answer = answer.map(v => {
//         // 대문자 판별
//         let a = v.toUpperCase();
//         let idx = 0;
        
//         if(v === ' ') return ' ';
        
//         if(v === a){
//             idx = upper.indexOf(v);
//             return upper[(idx + n) % 26];
//         }else{
//             idx = lower.indexOf(v);
//             return lower[(idx + n) % 26];
//         }
//     }) 
//     return answer.join('');
// }


2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}