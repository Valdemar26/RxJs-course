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

// 'zip' operator
// const s1$ = Rx.Observable.of('Hello');
// const s2$ = Rx.Observable.of('World');
//
// Rx.Observable
//     .zip(s1$, s2$.delay(2000))
//     .subscribe(createSubscribe('zip'));

// const interval$ = Rx.Observable.interval(1000);
//
// Rx.Observable
//   .zip(
//       interval$,
//       interval$.take(3)
//   )
//   .subscribe(createSubscribe('zip'));

// 'withLatestFrom' operator
// const int1$ = Rx.Observable.interval(1000);
// const int2$ = Rx.Observable.interval(500);
//
// int1$.withLatestFrom(int2$)
//     .take(5)
//   .subscribe(createSubscribe('withLatestFrom'));


// 'combineLatest' operator
const t1$ = Rx.Observable.timer(1000, 2000);
const t2$ = Rx.Observable.timer(2000, 2000);
const t3$ = Rx.Observable.timer(3000, 2000);

Rx.Observable
    .combineLatest(t1$, t2$, t3$)
    .take(5)
    .subscribe(createSubscribe('combineLatest'));