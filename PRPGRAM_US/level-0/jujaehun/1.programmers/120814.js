// 피자 나눠 먹기 (1)

function solution(n) {
    let answer = 0;
    
    if (n % 7 == 0) {
        answer = n/7
    } else {
        answer = n/7+1
    }
    // Math.floor() 함수로 소숫점 이하 버린다.
    return Math.floor(answer);
}