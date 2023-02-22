// 배열 회전시키기

/*

function solution(numbers, direction) {
    let answer = [];
    
    if (direction === "right"){
        answer.push(numbers.length);
        for(let i = 0; i < numbers.length-1; i++){
            answer.push(numbers[i])
        }
    } else if (direction === "left"){
        for(let i = 1; i < numbers.length; i++){
            answer.push(numbers[i])
        }
        answer.push(numbers[0])
    }
    return answer;
}

이거는 계속 오류가 났다 왜지?

*/


function solution(numbers, direction) {
    if(direction === 'right') {
        numbers.unshift(numbers.pop())
    } else {
        numbers.push(numbers.shift())
    }
    return numbers
}