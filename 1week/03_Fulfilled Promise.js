const timerPromise = new Promise((resolve, reject) => { // 이곳에 정의된 함수가 executor
    setTimeout(() => {
        console.log('First');
          resolve();
      }, 1000);
  });
  
  // 이 시점에서 timerPromise는 Fulfilled Promise라고 부를 수 있다.
  
  timerPromise.then(() => {
      console.log('Middle');
      console.log('Last');
  });
  
  // Print: First
  // Middle
  // Last