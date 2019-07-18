

console.log(Rx);

var stream$ = Rx.Observable.create( function (observer) {
  observer.next('One');

  setTimeout( function () {
    observer.next('After 3 seconds!');
  }, 3000);
});

stream$.subscribe( function (data) {
  console.log('Subscribe: ', data);
});
