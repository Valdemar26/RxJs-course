var button = document.querySelector('button');

// create Stream
var btn$ = Rx.Observable.fromEvent(button, 'click');

// subscribe to Stream
btn$.subscribe(
    function (event) {
      console.log(event);
    }
);

Rx.Observable.fromEvent
  (
      document.querySelector('input'),
      'keyup'
  )
    .subscribe( e => console.log(e));

Rx.Observable.fromEvent(document, 'mousemove')
  .subscribe( e => {
    document.querySelector('h2').innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
  });