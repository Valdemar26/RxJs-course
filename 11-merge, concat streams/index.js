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

// const s1$ = Rx.Observable.of('Hello');
// const s2$ = Rx.Observable.of('World');
//

// 'merge()' method
// s1$.merge(s2$)
//   .subscribe(createSubscribe('merge'));
//
// Rx.Observable.merge(s1$, s2$)
//   .subscribe(createSubscribe('merge'));

// const s3$ = Rx.Observable.interval(1000).map( x => 'Stream 1: ' + x);
// const s4$ = Rx.Observable.interval(500).map( x => 'Stream 2: ' + x);
//
// Rx.Observable.merge(s3$, s4$)
//     .take(12)
//     .subscribe(createSubscribe('merge'));

// 'mergeAll()' method
// Rx.Observable.range(1, 3)
//   .map(x => Rx.Observable.range(1, 3))
//   .mergeAll()
//   .subscribe(createSubscribe('mergeAll'));

// const s1$ = Rx.Observable.from([1, 2, 3]);
// const s2$ = Rx.Observable.from([4, 5, 6]);

// 'concat()' method
// Rx.Observable.concat(s1$, s2$)
//   .subscribe(createSubscribe('concat'));

// 'concatAll()' method
Rx.Observable.range(1, 3)
  .map(x => Rx.Observable.range(x, 3))
  .concatAll()
  .subscribe(createSubscribe('concatAll'));