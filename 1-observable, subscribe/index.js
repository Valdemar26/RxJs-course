
var stream$ = Rx.Observable.create( function (observer) {

  observer.next('One');

  // setTimeout( function () {
  //   observer.complete();
  // }, 3000);

  setTimeout( function () {
    observer.error('Something went wrong!');
  }, 5000);

  setTimeout( function () {
    observer.next('After 2 seconds!');
  }, 2000);

  observer.next('Two');
});

stream$
    .subscribe(
        function (data) {
          console.log('Subscribe: ', data);
        },
        function (error) {
          console.log('Error: ', error);
        },
        function () {
          console.log('Completed!');
        }
);
