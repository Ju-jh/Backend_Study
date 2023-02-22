function solution(n) {
    let answer = [];
    let numtoString = n.toString();
    
    for (let i = numtoString.length-1; i >= 0; i--){
        answer.push(+numtoString[i])
    }
    return answer;
}