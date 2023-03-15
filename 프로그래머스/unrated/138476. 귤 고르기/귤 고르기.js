function solution(k, tangerine) {
  const obj = {};

  tangerine.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  const kind = Object.values(obj).sort((a, b) => b - a);

  let answer = 0;
    for (let el of kind) {
        if(k > 0){
            k -= el;    
            answer++;
        } else break;
    }
  return answer;
}