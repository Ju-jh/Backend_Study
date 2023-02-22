//짝수는 싫어요

function solution(n) {
    let answer = [];
    for (let i = 0; i <= n; i++){
        if (i % 2 !== 0) {
            answer.push(i)
        }
    }
    //sort()로 오름차순 해버리면 10자리부터 꼬인다. 아래 함수 사용했다.
    return answer.sort((a,b)=>a-b);
}