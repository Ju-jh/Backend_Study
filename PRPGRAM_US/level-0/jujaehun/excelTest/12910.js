function solution(arr, divisor) {
    let answer = [];
    let arrAnswer = arr.sort((a,b)=>a-b);
    for(let i = 0; i < arrAnswer.length; i++){
        if (arrAnswer[i] % divisor == 0){
            answer.push(arrAnswer[i]);
        } 
    }
    if(answer.length == 0) {
        answer.push(-1)
    }
    
    return answer;
}