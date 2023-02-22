function solution(a, b) {
    const dayofWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const lastdayofMonths = [31,29,31,30,31,30,31,31,30,31,30,31];
    let day = b+4; // 1월 1일은 FRI, b가 1일 때 인덱스로는 5
    // 1월은 이전 월의 일수를 더하지 않음으로 a-1
    for(let i = 0; i < a-1; i++){
        day += lastdayofMonths[i];
    }
    return dayofWeek[day%7];
}