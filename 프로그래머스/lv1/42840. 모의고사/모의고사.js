function solution(answers) {
    let n = answers.length;
    let person1 = "12345".repeat(Math.ceil(n/5)).split("");
    let person2 = "21232425".repeat(Math.ceil(answers.length/8)).split("");
    let person3 = "3311224455".repeat(Math.ceil(answers.length/10)).split("");
    
    //수포자들이 맞춘 정답 수
    let correct = [0,0,0,0]
    correct[1] = person1.filter((el,i) => +el === answers[i]).length;
    correct[2] = person2.filter((el,i) => +el === answers[i]).length;
    correct[3] = person3.filter((el,i) => +el === answers[i]).length;
    
    // 제일 많이 맞춘 정답수를 구해서 수포자들의 맞춘 정답수랑 비교해서 같은수만 result에 push한다.
    let max = Math.max(...correct);
    let result = []
    for(let j = 1; j <= 3; j++){
        if(max === correct[j]) result.push(j);
    }
    
    return result;
}