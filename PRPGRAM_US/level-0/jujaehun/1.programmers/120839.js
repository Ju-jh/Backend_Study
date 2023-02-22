// 가위 바위 보

function solution(rsp) {
    let gawi_win = 0, bawi_win = 5, bo_win = 2;
    let answer = '';
    
    
    for(let i = 0; i < rsp.length; i++){
        if (rsp[i] == 2) {
            answer += gawi_win;
        } else if (rsp[i] == 0) {
            answer += bawi_win;
        } else if (rsp[i] == 5) {
            answer += bo_win;
        }
    }
    
    
    return answer;
}