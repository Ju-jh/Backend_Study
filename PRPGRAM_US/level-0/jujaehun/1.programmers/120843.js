// 공 던지기

function solution(numbers, k) {
    let answer = [];
    let infinityArray = [];
    for(let j = 0; j < 1000; j++){
        for(let i = 0; i < numbers.length; i++){
            infinityArray.push(numbers[i])
        }
    }   
    
    for(let i = 0; i < infinityArray.length; i++){
        if(i % 2 == 0){
            answer.push(infinityArray[i])
        }
        
    }
    console.log(infinityArray)
    console.log(answer)
    console.log(answer[k-1])
    return answer[k-1]
}