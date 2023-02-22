// 문자열안에 문자열

function solution(str1, str2) {
    let answer = 0;
    let changestr = str1.split(str2)
    
    if (changestr == str1){
        answer += 2
    } else {
        answer += 1
    }
    
    return answer;
}