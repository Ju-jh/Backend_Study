
function solution(s){
	let answer = "";
    let numbers = s.split(" ").sort((a,b)=>a-b);

    // 소수가 아닌 최솟값 +=하기
    for(let i = 0; i < numbers.length; i++){
        if (!isPrime(numbers[i])){
            answer += numbers[i]
            break;
        }
    }

    

    // 소수인 최대값 += 하기
    numbers.reverse()
    for(let i = 0; i <numbers.length; i++){
       if (isPrime(numbers[i])){
            answer += ' ' + numbers[i]
            break;
       }
    }
    return answer;
}

function isPrime(num) {
    // 소수는 1과 자기 자신만으로만 나누어 떨어지는 수 임으로
    // num > i
    for(let i = 2; num > i; i++) {
    if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
      return false;
     }
    }
   // 소수는 1보다 큰 정수임으로
   // 1보다 작으면 false를 리턴한다
   return num > 1;
  
}

let s="97 75 88 99 95 92 73";

console.log(solution(s))