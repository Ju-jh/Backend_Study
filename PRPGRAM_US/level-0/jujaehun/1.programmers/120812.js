//최빈값 구하기

// 해결하기 가장 어려웠음.

function solution(array) {

    let sameNum = array.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1 
        return acc;
    }, {})

    let sort = Object.keys(sameNum).sort((a, b) => sameNum[b] - sameNum[a]);  // 횟수 많은 최빈값 내림차순

    return sameNum[sort[0]] === sameNum[sort[1]] ? -1 : Number(sort[0]);
}