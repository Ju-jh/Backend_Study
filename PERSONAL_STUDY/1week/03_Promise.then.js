const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('First');
      resolve('Resolve!'); // resolve를 실행할 때, 안에 데이터를 넣어줄 수 있습니다.
    }, 1000);
  });
  
  resolvePromise.then((data) => {
    console.log('Middle');
    console.log('Last');
    console.log(data);
  })
  
  // Print: First -> 1초 뒤에 출력됩니다.
  // Middle
  // Last
  // Resolve!