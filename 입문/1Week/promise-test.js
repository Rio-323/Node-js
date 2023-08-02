async function main() {
    // Non-Blocking model 비동기
    // function first() {
    //     console.log("set Time Out이 실행되었습니다.");
    // }

    // console.log("코드가 실행되었습니다."); // 1번
    // setTimeout(first, 1000) // 1초 뒤에 first 함수 실행. -> 3번
    // console.log("코드가 종료되었습니다."); // 2번



    // function printFunc() {
    //     console.log("printFunc가 실행되었습니다.");
    // }

    // const obj = new Object();
    // const prom = new Promise(printFunc);



    // const resolvePromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       console.log('First');
    //       resolve('Resolve!'); // resolve를 실행할 때, 안에 데이터를 넣어줄 수 있습니다.
    //     }, 1000);
    //   });
      
    //   resolvePromise.then((data) => {
    //     console.log('Middle');
    //     console.log('Last');
    //     console.log(data);
    //   })
      
      // Print: First -> 1초 뒤에 출력됩니다.
      // Middle
      // Last
      // Resolve!



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
}

main();