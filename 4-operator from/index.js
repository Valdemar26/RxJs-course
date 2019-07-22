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

const array = [
  {
    id: 1,
    name: 'WFM1'
  },
  {
    id: 2,
    name: 'WFM2'
  }
];

const set = new Set([ 1, 2, 3, '4', '5', {id: 6} ]);

const map = new Map( [ [1, 2], [3, 4], [5, 6] ] );

Rx.Observable.from([1,2,3,4,5])
  .subscribe(createSubscribe('from'));

Rx.Observable.from(array)
  .subscribe( data => console.log(data));

Rx.Observable.from(set)
  .subscribe( data => console.log(data));

Rx.Observable.from(map)
  .subscribe( data => console.log(data));