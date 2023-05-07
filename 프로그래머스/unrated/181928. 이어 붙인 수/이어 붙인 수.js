function solution(num_list) {
    let even = '';
    let odd = '';
    
    num_list.forEach(v => v % 2 ? odd += v : even += v);
    
    return Number(even) + Number(odd);
}