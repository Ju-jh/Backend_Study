// 숨어있는 숫자의 덧셈 (2)

function solution(my_string) {
    let result = 0;
    
    for(let i = 0; i < my_string.length; i++){
        let tmp = 0;
        while(!Number.isNaN(Number(my_string[i]))){
            tmp += my_string[i];
            // console.log(tmp);
            i++;
        }
        result += Number(tmp);
        console.log(result);
    }
    
    return result;
}