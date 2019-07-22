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

// chain functions
Rx.Observable.interval(1000)
  .map( x => x * x )
  .take(10)
  .subscribe( createSubscribe('map') );

Rx.Observable.of('hello', 'world', 'wfm')
  // .map( x => x.toUpperCase() )
  .subscribe(createSubscribe('map'));

Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
    // .map( x => x.target.value )
    .pluck('target', 'value')
    .map( x => x.toUpperCase())
    .map( x => {
      return {
        value: x,
        length: x.length
      }
    })
    .subscribe(createSubscribe('fromEvent'));