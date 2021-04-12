const {_filter, _map, _each, _curry, _curryr, _get, _reduce, _pipe, _go, _keys, _identity, _values, _pluck, _reject, _compact, _find, _find_index,
_some,
_every,
_min,
_max,
_min_by,
_max_by,
_group_by,
_count_by,
_pairs,
_head,
} = require('./js/_');

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

console.clear()

console.log(
  _find(users, function(user){
    return user.age < 30
  })
);

// console.log(
//   _get(_find(users, function(user){
//     return user.age < 30
//   }), 'name')
// );

_go(
  users,
  _find(function(user){ return user.id === 50}),
  _get('name'),
  console.log
)

console.log(
  _find_index(users, function(user){
    return user.id === 50
  })
);


console.clear()

console.log(
  _some([1,2,5,10,20], function(val) {
    return val > 20;
  })
);

console.log(
  _some([null, false, 0])
);


// 우선 고차함수를 선택하고 로직에 맞는 보조함수를 선택
console.log(
  _every([13,24,5,10,20], function(val){
    return val > 3;
  })
)

console.log(
  _every([1, 2, 3])
);

console.clear()


console.log(
  _min([1, 2, 4, 10, 5, -4])
);

console.log(
  _max([1, 2, 4, 10, 5, -4])
);


console.log(
  _min_by([1, 2, 4, 10, 5, -4], Math.abs)
);

console.log(
  _max_by([1, 2, 4, 10, 5, -11], Math.abs)
);

console.log(
  _max_by(users, function(user) {
    return user.age
  })
);

console.clear();

_go(
  users,
  _filter(user => user.age >= 30),
  _min_by(user => user.age),
  console.log
)


_go(
  users,
  _reject(user => user.age >= 30),
  _max_by(_get('age')),
  console.log
)


console.clear()



_go(
  users,
  _group_by(function(user) {
    return user.age;
  }),
  console.log
)



_go(
  users,
  _group_by(_pipe(_get('name'), _head)),
  console.log
)

console.clear()

console.log(
  _count_by(users, function(user){
    return user.age - user.age % 10
  })
);

_go(
  users,
  _count_by(function(user) {
    return user.name[0]
  }),
  console.log
)


console.log(_pairs(users[0]));



console.clear()

// var _document_write = document.write.bind(document)

// _go(
//   users,
//   _reject(function(user) { return user.age < 20; }),
//   _count_by(function(user) {
//     return user.age - user.age % 10;
//   }),
//   _map((count, key) => `<li></li>${key}대는 ${count}명 입니다.</li>`),
//   list => `<ul>${list.join('')}</ul>`,
//   console.log
// )


var f1 = _pipe(
    _count_by(function(user) { return user.age - user.age % 10; }),
    _map((count, key) => `<li></li>${key}대는 ${count}명 입니다.</li>`),
    list => `<ul>${list.join('')}</ul>`,
    console.log
)

f1(users)

var f2 = _pipe(_reject(user => user.age < 20), f1)

console.log(f2(users));







