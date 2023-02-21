function solution(my_string) {
    let string = my_string.split(' ');

    // console.log(string[1]);
    // console.log(typeof string[1]);
    
    let answer = +string[0];
    
    // console.log(typeof answer);
    
    for (i = 0; i < string.length; i++) {
        
        if (string[i] === "+") {
            answer += +(string[i+1]);
        }
        if (string[i] === "-") {
            answer -= +(string[i+1]);
        }
    } 
    return answer;
}
        

//120902 연산자가 하나가 아니다.