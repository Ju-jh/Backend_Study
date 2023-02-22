// 옷가게 할인 받기

function solution(price) {
    let answer = 0;
    
    if (price >= 500000) {
        answer = price * 0.8
    } else if (price >= 300000) {
        answer = price * 0.9
    } else if (price >= 100000) {
        answer = price * 0.95
    } else {
        answer = price;
    }
    
    return Math.floor(answer);
}