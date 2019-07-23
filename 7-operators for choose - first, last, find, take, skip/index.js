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

Rx.Observable.of(1,7,4,9,8,2, 'hello')
  // .first()
  // .last()
  // .find(x => x === 7)
  // .findIndex(x => x === 7)
  // .take(3)
  // .skip(2)
  .skipWhile(x => {
    return typeof x === 'number';
  })
  .subscribe(createSubscribe('find'));

// Rx.Observable.interval(500)
//   .skipWhile(x => x < 5)
  // .take(10)
  // .takeWhile(x => x < 13)
  // .subscribe(createSubscribe('takeWhile'));

Rx.Observable.interval(500)
    .skipUntil(Rx.Observable.timer(3000))
    .takeUntil(Rx.Observable.timer(5000))
    .subscribe(createSubscribe('skipUntil'));