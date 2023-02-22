// 피자 나눠 먹기 (2)

function solution(n) {
    let answer = 0;
    
    // n을 나눈 나머지가 0일때 = n이 6의 배수일 때
    if (n % 6 == 0) {   
        // 답변은 n 나누기 6
        return answer = n/6;
    // 이외의 상황일 때
    } else {
        // for문으로 i를 계속 돌려주고
        for (let i = 1; i <= 100; i++){
            // 입력값 n 곱하기 i 를 6으로 나눴을 때 나머지가 0이면
            if((n * i) % 6 == 0) {
                // answer 는 n 곱하기 i 나누기 6이다.
                return answer = n*i/6;
            }
        }
    }
    return answer;
}