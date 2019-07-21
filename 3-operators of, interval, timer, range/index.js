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

Rx.Observable.of([1,2,3,4,5], 'test', 9, '99')
    .subscribe(
        createSubscribe('of')
    );

Rx.Observable.interval(1000)
    .take(7)
    .subscribe(
        createSubscribe('interval')
    );

Rx.Observable.timer(4000, 500)
    .take(10)
    .subscribe(
        createSubscribe('timer')
    );

Rx.Observable.range(3, 6)
    .subscribe(
        createSubscribe('range')
    );