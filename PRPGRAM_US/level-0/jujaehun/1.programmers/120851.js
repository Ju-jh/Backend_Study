// 숨어있는 숫자의 덧셈 (1)

function solution(my_string) {
    let answer = 0;
    
    for(let i = 0; i < my_string.length; i++){
        if(!isNaN(my_string[i])){
            answer += +my_string[i]
        }
    }
    
    return answer;
}