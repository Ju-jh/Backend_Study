function solution(cipher, code) {
    let answer = '';
    // for문 돌면서
    for (let i = 0; i < cipher.length; i++) {
        // code 배수 번째인 경우, 
        if ((i+1) % code === 0) {
            // answer에 붙이기
            answer += cipher[i]
        }
    }
    return answer;
}