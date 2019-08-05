
// helper-method
function createSubscribe(name) {
  return {
    next(x) {
      console.log(name, ': ', x);
    },
    error(err) {
      console.log(name, ': ', err);
    },
    complete() {
      console.log(name, ' completed!');
    }
  }
}

// 'catch' errors
// Rx.Observable
//     .throw(new Error('Something went wrong!'))
//     .catch( error => Rx.Observable.of(error) )
//     .subscribe(createSubscribe('catch'));
//
// Rx.Observable
//   .interval(500)
//   .take(2)
//   .subscribe(createSubscribe('interval'));

// 'onErrorResumeNext' method
const s1$ = Rx.Observable
    .throw(new Error('Something went wrong!'));
const s2$ = Rx.Observable.interval(500).take(2);

s1$.onErrorResumeNext(s2$)
  .subscribe(createSubscribe('onErrorResumeNext'));