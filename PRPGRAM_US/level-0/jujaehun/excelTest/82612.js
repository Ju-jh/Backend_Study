function solution(price, money, count) {
    let answer = 0;
    let payMoney = 0;
   
    for(let i = 1; i <=count; i++){
        payMoney += +(price*i)
    } 
    answer = payMoney-money;
    if(answer > 0) {
        return answer;
    } else {
        return 0;
    }
}