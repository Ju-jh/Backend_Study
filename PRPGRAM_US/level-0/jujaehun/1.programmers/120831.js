// 짝수의 합

function solution(n) {
    let jjacksu = 0;
    for (let i = 0; i <= n; i++) {
       if (i % 2 == 0) {
           jjacksu += i
       }
    }
    
    return jjacksu;
}