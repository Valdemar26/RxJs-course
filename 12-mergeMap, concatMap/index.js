function createSubscribe(name) {
  return {
    next(x) {
      console.log(name, ': ', x);
    },
    error(err) {
      console.log('Errors: ', err);
    },
    complete() {
      console.log(name, ' completed!');
    }
  }
}

// const promise = (data) => {
//   return new Promise( (resolve, reject) => {
//     setTimeout(() => {
//       resolve(data + ' wish you good luck!');
//     }, 2000);
//   });
// };

// 'mergeMap()' method
// Rx.Observable.of('Hello')
//   .subscribe(x => {
//     Rx.Observable.of(x + ' World')
//         .subscribe(createSubscribe('mergeMap'));
//   });

// 'mergeMap()' method
// Rx.Observable.of('Hello')
//     .mergeMap(x => {
//       return Rx.Observable.of(x + ' World 1')
//     })
//     .subscribe(createSubscribe('mergeMap'));

// 'mergeMap()' method
// Rx.Observable.of('WFM')
//   .mergeMap((x) => {
//     return promise(x);
//   })
//     .subscribe(createSubscribe('promise'));

Rx.Observable.range(1, 10)
  .concatMap((x, i) => {
    return Rx.Observable.interval(100)
        .take(x)
        .map(q => i)
  })
  .subscribe(createSubscribe('concatMap'));