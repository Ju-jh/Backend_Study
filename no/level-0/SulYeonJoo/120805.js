function solution(num1, num2) {
    var answer = 0;
    answer = ~~(num1 / num2);
    return answer;
}
//소수점을 표시하는게 나은가 toFixed 
//아니면 0< num1, num2 =< 100 제한표시하는게 나은가
//착각함! 소수점표기가 아닌 정수만 표기해야됨.