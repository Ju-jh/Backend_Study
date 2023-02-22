function solution(numbers) {
    let answer =45;
    let sum = 0;
    
    for(let i = 0; i < numbers.length; i++){
         sum += numbers[i]   
    }
    return answer-sum;
}