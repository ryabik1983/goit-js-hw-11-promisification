// const delay = ms => {
//     return new Promise((resolve) => {
//       setTimeout(() => { resolve(ms) }, ms);
//     });
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms

const makePromise = () => {
  return new Promise((resolve, reject) => {
    resolve ('resolve!')
  });
};

// makePromise().then(result => console.log(result));

const delay = ms => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.3;
    setTimeout(() => {
      if(passed){
        resolve(ms)}
        reject('error!')
      }, ms)
  })
  

  // Твой код
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger).catch(error => console.log(error)); // Resolved after 2000ms
delay(1000).then(logger).catch(error => console.log(error)); // Resolved after 1000ms
delay(1500).then(logger).catch(error => console.log(error)); // Resolved after 1500ms
console.log(`%c Hello!`,
'color: tomato; font-size: 54px');
// const promise = new Promise((resolve, reject) => {
//   /*
//    * Эта функция будет вызвана автоматически. В ней можно выполнять
//    * любые асинхронные операции. Когда они завершатся — нужно
//    * вызвать одно из: resolve(результат) при успешном выполнении,
//    * или reject(ошибка) при ошибке.
//    */
// });