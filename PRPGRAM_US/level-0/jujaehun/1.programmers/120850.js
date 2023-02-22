// 문자열 정렬하기 (1)

function solution(my_string) {
    let answer = [];
    
    for(let i = 0; i < my_string.length; i++){
        if (!isNaN(my_string[i])){
           answer.push(+my_string[i]) 
        }
        
    }
    
    
    return answer.sort();
}