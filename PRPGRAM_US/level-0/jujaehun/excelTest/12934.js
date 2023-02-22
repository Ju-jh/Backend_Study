function solution(n){
    let answer = 0;
    for(let i = 1; i**2<=n; i++){
        if(i**2==n){
            answer = (i+1)**2;
        }else {
            answer = -1; 
        }
    }
    return answer;
}