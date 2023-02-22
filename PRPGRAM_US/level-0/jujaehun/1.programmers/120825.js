// 문자 반복 출력하기

function solution(my_string, n) {
    // answer 라는 문자열을 생성
    let answer = '';
    //my_string 이라는 문자열에 있는 각각의 문자를 축출
    for (let i = 0; i <my_string.length; i++){
        for (let j = 0; j < n; j++){
            answer += my_string[i]
        }
    }
    return answer;
}