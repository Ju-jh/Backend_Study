function solution(my_string) {
    // my_string = "3 + 4"
    // my_String을 공백으로 쪼개기  --> 구글링
    let stringList = my_string.split(' '); // [ '3', '+', '4' ]

    let total = Number(stringList[0]); // 3
    
    // 쪼갠 것들을 for문으로 돌려서 +인 경우, -인 경우로 계산하기
    for (let i=0; i < stringList.length; i++) {

        if (stringList[i] === "+") {
           total += Number(stringList[i+1]);
        } 
        if (stringList[i] === "-") {
            total -= Number(stringList[i+1]);
        } 
    }
    return total;
}