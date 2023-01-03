function solution(my_string) {
    let newStr = ''
    for(let el of my_string){
      if(el === el.toUpperCase()){
          newStr += el.toLowerCase()
      }else{
          newStr += el.toUpperCase()
      }
    }
    return newStr;
}

