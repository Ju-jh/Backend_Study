// 모음 제거

function solution(my_string) {
    
    const moeum = 'aeiou'
    let result = my_string.split('').filter((e)=>(!moeum.includes(e))).join('')
    
    return result
}