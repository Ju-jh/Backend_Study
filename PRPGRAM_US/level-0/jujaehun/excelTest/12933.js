function solution(n) {
    let answer = 0;
    let numtoString = n.toString().split("").sort((a,b)=>b-a)
    for(let i = 0; i < numtoString.length; i++){
        answer += numtoString[i]
    }
    
    
    return answer;
}