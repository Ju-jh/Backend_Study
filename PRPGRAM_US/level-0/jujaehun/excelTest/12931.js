function solution(n){
    let answer = 0;
    let numtoString = n.toString()
    
    for(let i = 0; i < numtoString.length; i++){
        answer += +numtoString[i]
        
    }
    return answer;
}