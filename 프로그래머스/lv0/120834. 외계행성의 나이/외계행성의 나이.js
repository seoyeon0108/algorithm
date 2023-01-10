function solution(age) {
    let alp = 'abcdefghij';
    let newAge = (''+age).split('');
    let answer = '';
    for(let el of newAge){
        for(let i = 0; i < 10; i++){
            if( i === Number(el)){
                answer += alp[i]
            }
        }
    }
    return answer;
}