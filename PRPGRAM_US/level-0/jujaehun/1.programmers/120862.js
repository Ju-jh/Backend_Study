// 최댓값 만들기 (2)

function solution(numbers) {
    let subArray = [];
    
    for(let i = 0; i < numbers.length-1; i++){
        for(let j = i+1; j < numbers.length; j++){
            console.log(numbers[i]*numbers[j])
            subArray.push(numbers[i]*numbers[j])
        }
    }
    let answer = subArray.sort((a,b)=>b-a);
    return answer[0];
}