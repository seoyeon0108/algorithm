function solution(a, b) {
    const frontA = '' + a + b;
    const frontB = '' + b + a;
    return frontA >= frontB ? Number(frontA) : Number(frontB);
}