
function solution(month, day){
    let date = new Date(2023, month-1, day + 98);
    //getYear는 그냥 해보고싶어서 함.
    let getYear = date.getYear()+1900;
    let getMonth = date.getMonth()+1;
    let getDay = date.getDate();
  
    return getYear + "년" + getMonth + "월" + getDay + "일";
  }
  console.log(solution(9,25))