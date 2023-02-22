// 다항식 더하기

function solution(polynomial) {
    let answer = '';
    let sik = polynomial.split(' + ')
    let sutjaplusx = 0;
    let sutja = 0;
    
    for(let i = 0; i < sik.length; i++){
        if (!isNaN(sik[i])){
            sutja += +sik[i]
        } else if (sik[i] == "x"){
            sutjaplusx += +1
        } else {  
            let newsik = sik[i].slice(0,-1);
            sutjaplusx += +newsik
        }
    }
    if (sutja == 0 && sutjaplusx == 0){
        answer = ``
    } else if (sutja == 0 && sutjaplusx == 1) {
        answer = `x`
    } else if (sutja == 0 && sutjaplusx !== 0) {
        answer = `${sutjaplusx}x`
    } else if (sutja !== 0 && sutjaplusx == 0){
        answer = `${sutja}`
    } else if (sutja !== 0 && sutjaplusx == 1){
        answer = `x + ${sutja}`
    } else {
        answer = `${sutjaplusx}x + ${sutja}`   
    }
        
    
    return answer;
}