// 점의 위치 구하기

function solution(dot) {
    let answer = 0;
    // 1사분면일때
    if (dot[0] > 0 && dot[1] > 0) {
        answer += 1;
    // 2사분면일때
    } else if (dot[0] < 0 && dot[1] > 0){
        answer += 2;
    // 3사분면일때    
    } else if (dot[0] < 0 && dot[1] < 0){
        answer += 3;
    // 4사분면일때   
    } else if (dot[0] > 0 && dot[1] < 0){
        answer += 4;
    }
    
    return answer;
}