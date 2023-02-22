// 배열 자르기

// 애매하다.
// numbers 는 정수 배열, num1 num2 는 매개변수
function solution(numbers, num1, num2) {
    
    let answer = [];
    
    for (let i = num1; i < num1+num2; i++){
    answer.push(numbers[i])
    }
    
    return answer;
}

// 제출하니 틀렸다.

// numbers 는 정수 배열, num1 num2 는 매개변수
function solution(numbers, num1, num2) {
    
    let answer = [];
    
    for (let i = num1; i <= num2; i++){
        answer.push(numbers[i])    
    }
    
    return answer;
}

// 성공적인 제출이라고 한다.