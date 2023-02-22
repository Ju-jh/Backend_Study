function solution(num){
	let answer= 0;
    let change = 1000 - num1

    while(change >= 500){
        change -= 500;
        answer++;
    }
    while(change >= 100){
        change -= 100;
        answer++;
    }
    while(change >= 50){
        change -= 50;
        answer++;
    }
    while(change >= 10){
        change -= 10;
        answer++;
    }

    return answer;
}

// num1 = 물건의 가격값
let num1 = 160;

console.log(solution(num1))
