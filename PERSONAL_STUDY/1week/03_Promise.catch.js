const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('First');
          reject('Error!!'); // 직접 reject를 실행하면 프로미스에서 에러가 발생한것으로 간주됩니다.
      }, 1000);
  });
  
  errorPromise.then(() => {
      console.log('Middle');
      console.log('Last');
  }).catch((error) => {
      console.log('에러 발생!', error);
  });
  
  // Print: '에러 발생! Error!!'