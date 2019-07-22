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

// Promises can help to work with async code
function delay(ms = 1000) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(ms);
    }, ms);
  });
}

delay(3000).then( () => {
  console.log('Promise was resolved!');
});

const promise$ = Rx.Observable.fromPromise(delay(4000));

promise$.subscribe( createSubscribe('fromPromise'));