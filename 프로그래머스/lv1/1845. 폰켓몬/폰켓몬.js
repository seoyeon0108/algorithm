function solution(nums) {
    const choiceNum = nums.length/2;
    const PokemonType = [...new Set(nums)].length;
    
    return choiceNum <= PokemonType ? choiceNum : PokemonType;
}