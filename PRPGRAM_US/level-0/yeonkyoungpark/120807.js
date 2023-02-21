function solution(num1, num2) {
    let firstNum = num1;
    let secondNum = num2;
    let answer = 0;
    
    if(firstNum ===secondNum){
        answer = 1;
    } else{
        answer = -1;
    }
    return answer;
}