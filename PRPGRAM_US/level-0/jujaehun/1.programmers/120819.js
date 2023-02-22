// 아이스 아메리카노

function solution(money) {
    let answer = [];
    
    let changeMoney = money % 5500;
    let numShot = (money-changeMoney)/5500;
    
    answer[0] = numShot;
    answer[1] = changeMoney;    
    
    return answer;
}