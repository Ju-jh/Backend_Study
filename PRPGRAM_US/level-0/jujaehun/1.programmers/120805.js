//몫 구하기

function solution(num1, num2) {
    let answer = 0;
    if (num1 % num2 == 0 ) {
        return answer = num1 / num2;
    } else {
        return answer = Math.floor(num1/num2);
    }
    return answer;
}
