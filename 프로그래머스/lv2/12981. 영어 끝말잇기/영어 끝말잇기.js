function solution(n, words) {
    let answer = [0,0];
    // 바로 앞의 단어의 뒷 글자와 같지 않은 단어를 말하면 탈락
    // 앞에서 말했던 단어와 같은 단어를 말하면 탈락
    for (let i = 1; i < words.length; i++){
        if(words[i-1].slice(-1) != words[i][0]){
            answer[0] = (i+1) % n ? (i+1) % n : n
            answer[1] = parseInt(i/n) + 1
            return answer;
        }
        if(words.indexOf(words[i]) != words.lastIndexOf(words[i])){
            let num = words.lastIndexOf(words[i])
            answer[0] = (num+1) % n ? (num+1) % n : n
            answer[1] = parseInt(num/n) + 1
            return answer;
        }
        
    }
    return answer;
}