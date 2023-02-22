function solution(s) {
    let answer = '';
    
    if(s.length % 2 !== 0){
    answer += s[(s.length-1)/2]
    } else {
        answer += s[s.length/2-1]
        answer += s[s.length/2]
    }
    
    return answer;
}