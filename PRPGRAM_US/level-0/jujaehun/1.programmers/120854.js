// 배열 원소의 길이

function solution(strlist) {
    let answer = [];
    
    
    for (let i = 0; i < strlist.length; i++){
        let words = strlist[i];
        answer.push(words.length);
    }
    
    return answer;
}