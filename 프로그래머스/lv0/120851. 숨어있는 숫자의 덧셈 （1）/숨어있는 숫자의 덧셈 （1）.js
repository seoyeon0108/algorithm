function solution(my_string) {
    let newStr = my_string.replace(/[^0-9]/g, "").split('');
    return newStr.reduce((acc,cur)=> acc + Number(cur), 0);
}