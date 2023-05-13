function solution(str_list, ex) {
    return str_list.reduce((acc,cur) => acc + (cur.includes(ex) ? '' : cur), '');
}