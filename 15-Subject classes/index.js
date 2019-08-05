
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

// 'Subject' class
const subject$ = new Rx.Subject();

// subject$
//     .subscribe(createSubscribe('subject'));

// subject$
//     .next(1);
// subject$
//     .next(2);
//
// setTimeout( () => {
//   subject$.next(3);
//   subject$.complete();
// }, 2000);

// const int$ = Rx.Observable.interval(500);
// int$.subscribe(subject$);
//
// subject$.subscribe(createSubscribe('subject 1'));
// subject$.subscribe(createSubscribe('subject 2'));
//
// setTimeout(() => {
//   subject$.subscribe(createSubscribe('subject 2'))
// }, 2000);


// 'BehaviorSubject' class
// const behaviorSubject$ = new Rx.BehaviorSubject('WFM');
// behaviorSubject$
//   .subscribe(createSubscribe('behavior'));
//
// behaviorSubject$
//   .next('Hello');

// 'ReplaySubject' class
// const replaySubject$ = new Rx.ReplaySubject(2);
//
// replaySubject$.next(1);
// replaySubject$.next(2);
// replaySubject$.next(3);
// replaySubject$.complete();
//
// replaySubject$
//     .subscribe(createSubscribe('replay'));

// 'AsyncSubject' class
const asyncSubject = new Rx.AsyncSubject();
asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.complete();

asyncSubject
  .subscribe(createSubscribe('async'));