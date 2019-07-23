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

const cars = [
  {
    name: 'audi',
    price: 500
  },
  {
    name: 'bmw',
    price: 400
  },
  {
    name: 'ford',
    price: 200
  }
];

// Rx.Observable.range(0, 10)
//     .filter(x => x > 3)
//     .subscribe(createSubscribe('filter'));

// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
//   .map(e => e.target.value)
//   .subscribe(x => {
//     Rx.Observable.from(cars)
//         .filter(c => c.name === x)
//         .subscribe(v => {
//           document.querySelector('div').innerHTML = `<h2>${ v.name.toUpperCase() }</h2><h4>${ v.price }</h4>`
//         });
//   });

// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
//   .map(e => e.target.value)
//   .distinct()
//   .debounceTime(1000)
//   .subscribe(createSubscribe('debounceTime'));

// find unique values with distinctUntilChanged() method
Rx.Observable.from([1, 2, 3, 3, 3, 4, 5, 6, 7, 7])
  .distinctUntilChanged()
  .subscribe(createSubscribe('from'));