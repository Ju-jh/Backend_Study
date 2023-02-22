// 배열의 평균값

// 계속 오류나서 해결하기 어려웠음.

function solution(numbers) {
    let answer = 0;
    //합계구하기
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        //여기서 numbers 라고만 정의하고 넘어가서 오류남
        sum += numbers[i]
        //답변은 합계 나누기 배열길이
        answer = sum/numbers.length;
    }
    return answer;
}