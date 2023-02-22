// 양꼬치

function solution(n, k) {
    let answer = 0;
    let canDiscount = 0;
    // sheepPrice 양꼬치를 n개 먹었을 때 가격 = n*12000
    let sheepPrice = n * 12000
    // canDiscount 빼줄 수 있는 음료수 개수 (n/10 > 1)이면 n/10>1 을 Math.floor(에다가 넣어주자.)
    if (n/10 >= 1) {
        canDiscount = Math.floor(n/10)
    }
    // beveragePrice (먹은 음료수 개수 k - 빼줄 수 있는 음료수 개수) * 2000
    let beveragePrice = ( k - canDiscount ) * 2000
    // 답변 = sheepPrice + beveragePrice
    answer = sheepPrice + beveragePrice
    return answer;
}