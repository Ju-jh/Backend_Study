function solution(n) {
    let answer = '';
    
    for(let i = 1; i <= n; i++){
        if(i % 2 !== 0){
           answer += '수' 
        } else {
            answer += '박'
        }
    }
    
    
    return answer;
}