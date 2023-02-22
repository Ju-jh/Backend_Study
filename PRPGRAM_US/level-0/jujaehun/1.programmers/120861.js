// 캐릭터의 좌표

//틀렸다고 한다
/*
function solution(keyinput, board) {
    let standard = [0,0];
    
    let limit = [Math.abs(Math.floor(board[0]/2)),Math.abs(Math.floor(board[1]/2))];
    // X좌표값만 구하기
    for(let i = 0; i < keyinput.length; i++){
        if(keyinput[i] == "right") {
            standard[0] += 1;
        } else if (keyinput[i] == "left") {
            standard[0] -= 1;
        } else if(keyinput[i] == "up") {
            standard[1] += 1;
        } else if (keyinput[i] == "down") {
            standard[1] -= 1;
        } 
    }
    
    // limit 넘으면 limit 값으로 바꿔주기
    if(Math.abs(standard[0]) > limit[0]){
        standard[0] = standard[0] > 0 ? limit[0] : -limit[0];
    }
    if(Math.abs(standard[1]) > limit[1]){
        standard[1] = standard[1] > 0 ? limit[1] : -limit[1];
    }
    
    return standard;
*/

