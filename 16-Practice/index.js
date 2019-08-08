function getUserById(id) {
  const params = {
    access_token: 'accesstoken',
    user_ids: id,
    fields: 'photo_big'
  };

  return $.ajax({
    url: 'https://api.vk.com/method/users/get?' + $.param(params),
    type: 'GET',
    dataType: 'JSONP'
  }).promise();
}

Rx.Observable.fromEvent($('input'), 'keyup')
  .pluck('target', 'value')
  .distinct()
  .debounceTime(2000)
  .mergeMap(v => Rx.Observable.fromPromise(getUserById(v)))
  .catch(error => Rx.Observable.of(error))
  .map(x => x.response[0])
  .subscribe(
      (user) => {
        $('h1').html(`${user.first_name} ${user.last_name} <i>${user.uid}</i>`);
        $('img').attr('src', user.photo_big);
      },
      error => console.log(error),
      () => console.log('Completed')
  );