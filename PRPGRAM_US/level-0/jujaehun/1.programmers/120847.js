// 최댓값 만들기(1)

function solution(numbers) {
    let answer = 0;
    
    numbers.sort((a,b)=>a-b);
    
    answer = numbers[numbers.length-2] * numbers[numbers.length-1]
    
    return answer;
}