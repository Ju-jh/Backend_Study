//컨트롤 제트

function solution(s) {
    let answer = 0;
    let str = s.split(" ")
    for(let i = 0; i < str.length; i++){
        if (!isNaN(+str[i])){
            answer += +str[i]
        } else if (str[i] == "Z") {
            answer -= +str[i-1]
        }
    }
    
    
    return answer;
}