process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
     // 입력 값 b(3) 만큼 반복문을 돌린다.
  for (let i = 0; i < b; i++) {
    // stars 변수를 초기화 해준다.
    let stars = "";

    // 위 for문이 한번 돌아갈 때 마다 입력 값 a(5) 만큼 반복문을 돌린다.
    for (let j = 0; j < a; j++) {
      // stars = stars + "*"
      stars += "*";
    }

    // 콘솔에 현재 까지 저장된 stars 값을 찍는다. (*****)
    console.log(stars);

    // i가 b(3) 보다 작을 경우 맨 위로가 다시 for문을 시행한다.
  }
    
    
});