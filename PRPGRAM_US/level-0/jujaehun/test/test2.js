function solution(str){
	let answer= 0;
    let sum = [];

    for(let i = 0; i < str.length; i++){
        if(str[i] == 'O') {
            if(str[i-1] == 'O'){
                sum.push(sum[i-1]+1) 
            } else {
                sum.push(1) 
            }
            
        } else if(str[i] == 'X'){
            sum.push(0);
        }
    }

    for(let i = 0; i < sum.length; i++){
        answer += sum[i]
    }

    return answer;
}

let str="OXOOOXXXOXOOXOOOOOXO";

console.log(solution(str))