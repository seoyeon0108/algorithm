function solution(my_string, letter) {
    var answer = '';
    for(let el of my_string){
        if(el != letter){
            answer += el
        }
    }
    return answer;
}