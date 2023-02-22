function solution(arr) {
    if (arr.length == 1) return [-1];
    
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            i = j;
        }
    }
    arr.splice(i, 1);
    return arr;
}