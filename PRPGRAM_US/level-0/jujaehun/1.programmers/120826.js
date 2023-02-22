// 특정 문자 제거하기
// my_string 이라는 문자열과 letter 라는 문자 입력이 매개변수로 주어짐.
function solution(my_string, letter) {
    // answer 문자열로 선언!
    let answer = '';
    for (let i = 0; i < my_string.length; i++){
        if (my_string[i] !== letter) {
            answer +=my_string[i]
        }
    }
    return answer;
    // answer를 반환
}