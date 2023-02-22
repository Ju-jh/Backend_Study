function solution(x) { // x = 15
    let sum = 0;
    let arr = x.toString().split(""); // [1,5]
    
    for(let i=0; i<arr.length; i++){
        sum += +(arr[i]) // 1+5
    }
    //삼항조건문
    return (x % sum == 0) ? true:false;
}