// 피자 나눠 먹기 (3)

function solution(slice, n) {
    let answer = n/slice;
    if (n % slice == 0){
        return answer;
    } else {
        //소숫점 이하 버려버려
        let answer = Math.floor(n/slice) + 1
        return answer;
    }
    
    return answer;
}