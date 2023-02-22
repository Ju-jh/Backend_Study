//배열 두 배 만들기

function solution(numbers) {
    let answer = [];
    
    for(let i = 0; i < numbers.length; i++){
        answer.push(numbers[i] * 2);
    }
    return answer;
}