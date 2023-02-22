function solution(s){
    let answer = 0;
    let realAnswer;

    for (let i = 0; i < s.length; i++){
        if(s[i] == 'p' || s[i] == 'P'){
            answer += 1
        } else if (s[i] == 'y' || s[i] == 'Y'){
            answer += -1
        }
    }
    
    if (answer == 0) {
        realAnswer = true;
    } else {
        realAnswer = false;
    }

    return realAnswer;
}