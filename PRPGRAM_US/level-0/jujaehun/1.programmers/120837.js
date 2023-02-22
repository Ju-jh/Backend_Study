// 개미 군단

function solution(hp) {
    let answer = 0, jang = 5, jung = 3, gong = 1;
    let jang_answer = Math.floor(hp / jang)
    let jung_answer = Math.floor(hp%jang / 3) 
    let gong_answer = ((hp%jang)%3)
    return answer = jang_answer+jung_answer+gong_answer;
}