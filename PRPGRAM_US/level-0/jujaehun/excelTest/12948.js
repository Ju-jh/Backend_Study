function solution(phone_number) {
    let answer = '';
    
    for (let i = 0; i < phone_number.length; i++){
        if (phone_number.length-4 > i){
            answer += '*'
        } else {
            answer += phone_number[i]
        }
    }
    
    return answer;
}