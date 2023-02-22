// 외계행성의 나이

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