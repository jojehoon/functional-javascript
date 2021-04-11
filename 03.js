const {_filter, _map, _each, _curry, _curryr, _get, _reduce, _pipe, _go, _keys, _identity, _values, _pluck, _reject, _compact} = require('./js/_');

var users = [
  { id: 10, name: 'ID', age: 36 },
  { id: 20, name: 'BJ', age: 32 },
  { id: 30, name: 'JM', age: 32 },
  { id: 40, name: 'PJ', age: 27 },
  { id: 50, name: 'HA', age: 25 },
  { id: 60, name: 'JE', age: 26 },
  { id: 70, name: 'JI', age: 31 },
  { id: 80, name: 'MP', age: 23 },
  { id: 90, name: 'FP', age: 13 }
];




console.log(_keys(users[0]));
console.log(_values(users[0]));

console.log(_map(_identity)(users[0]));


console.log(_pluck(users, 'age'));

console.clear()

console.log(_reject(users, function(user){ return user.age > 30}));

console.clear()

console.log(_compact([1, 2, 0, false, null, {}]))