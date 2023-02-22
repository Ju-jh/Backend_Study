//분수의 덧셈

function solution(numer1, denom1, numer2, denom2) {
    //분자
    let bunja = numer1*denom2 + numer2*denom1
    //분모
    let bunmo = denom1*denom2
    //최대공약수
    let maximum = 1;
    //약분
    for(let i = 1; i <= bunja; i++) {
        if(bunja%i === 0 && bunmo%i === 0) {
            maximum = i
        }
    }
    return [bunja/maximum, bunmo/maximum]
}