function solution(num_list) {
    const lastEl = num_list[num_list.length - 1];
    const beforeEl = num_list[num_list.length - 2];
    const pushValue = lastEl > beforeEl ? lastEl - beforeEl : lastEl + lastEl
    num_list.push(pushValue)
    return num_list;
}