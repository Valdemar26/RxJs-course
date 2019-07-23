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

// Buffers are using for temporary saving some values

// Rx.Observable.interval(500)
  // .buffer(Rx.Observable.interval(2000))
  // .bufferTime(2000)
  // .take(3)
  // .subscribe(createSubscribe('buffer'));

Rx.Observable.range(0, 40)
    .bufferCount(10)
    .subscribe(createSubscribe('buffer'));

Rx.Observable.interval(1000)
    .buffer(Rx.Observable.fromEvent(document, 'click'))
    .map(x => x.length)
    .subscribe(createSubscribe('buffer'));
