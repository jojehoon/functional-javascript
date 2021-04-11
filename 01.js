const {_filter, _map, _each, _curry, _curryr, _get, _reduce, _pipe, _go, _keys} = require('./js/_');

var users = [
  { id: 1, name: 'ID', age: 36 },
  { id: 2, name: 'BJ', age: 32 },
  { id: 3, name: 'JM', age: 32 },
  { id: 4, name: 'PJ', age: 27 },
  { id: 5, name: 'HA', age: 25 },
  { id: 6, name: 'JE', age: 26 },
  { id: 7, name: 'JI', age: 31 },
  { id: 8, name: 'MP', age: 23 }
];

// 1. 명령형 코드
  // 1. 30세 이상인 users를 거른다.
  var temp_users = [];
  for(var i = 0; i < users.length; i++){
    if(users[i].age >= 30) {
      temp_users.push(users[i])
    }
  }
  // console.log(temp_users);

  // 2. 30세 이상인 users의 names를 수집한다.
  // var names = [];
  // for(var i = 0; i < temp_users.length; i++){
  //   names.push(temp_users[i].name)
  // }
  // console.log(names);

  // 3. 30세 미만인 users를 거른다.
  var temp_users = [];
  for(var i = 0; i < users.length; i++){
    if(users[i].age < 30) {
      temp_users.push(users[i])
    }
  }
  // console.log(temp_users);
  
  // 4. 30세 미만인 users의 ages를 수집한다.
  // var ages = [];
  // for(var i = 0; i < temp_users.length; i++){
  //   ages.push(temp_users[i].age)
  // }
  // console.log(ages);

  // 2. _filter, _map으로 리팩토링
  // 응용형 함수, 함수가 함수를 인자로 받아서 원하는 시점에 평가하며, 로직을 완성 = 고차함수
  // 고차함수는 함수를 인자, 리턴값, 인자로 받은 함수를 실행하는 함수
  // function _filter(list, predi) {
  //   var new_list = []; //
  //   for(var i = 0; i < list.length; i++){

      // 중복을 제거나 추상화 할때 함수를 사용하자
      // 추상화의 단위가 객체, 메서드, 클래스가 아니라 함수를 이용하여 프로그래밍 하자
  //     if( predi(list[i]) ){
  //       new_list.push(list[i])
  //     }
  //   }
  //   return new_list;
  // }

  // console.log(_filter(users, function(user) { return user.age >= 30}));
  // console.log(_filter(users, function(user) { return user.age < 30}));
  // console.log(_filter([1,2,3,4], function(num){ return num % 2}));
  // console.log(_filter([1,2,3,4], function(num){ return !(num % 2)}));

  // function _map(list, mapper){
  //   var new_list = [];
  //   for(var i = 0; i < list.length; i++){
  //     new_list.push(mapper(list[i]))
  //   }
  //   return new_list;
  // }

  const over_30 = _filter(users, function(user) { return user.age >= 30})
  const names = _map(over_30, function(user){ return user.name})
  // console.log(names);

  const under_30 = _filter(users, function(user) { return user.age < 30 })
  const ages = _map(under_30, function(user) { return user.age })
  // console.log(ages);

  // console.log(_map([1,2,3], function(num){ return num * 2 }));

  // _map(
  //   _filter(users, function(user) { return user.age >= 30}), 
  //   function(user){ return user.name}
  // )

  // _map(
  //   _filter(users, function(user) { return user.age >= 30}), 
  //   _get('name')
  // )


var add = _curry(function(a,b){
  return a + b
})
add10 = add(10)
// console.log(add10(5));

var sub = _curryr(function(a, b) {
  return a - b
})

// console.log(sub(10, 5));

var sub10 = sub(10);
// console.log(sub10(5));


// console.log(_get(users[1], 'name'));
// console.log(_get(users[10], 'name'));

var gets = _curryr(_get)
// console.log(gets('name')(users[1]));

// console.log(_reduce([1,2,3], add, 0));
// console.log(_reduce([1,2,3], add));
// console.log(_reduce([1,2,3,4], add, 10));

// console.clear();

// var f1 = _pipe(
//   function(a) { return a + 1; },
//   function(a) { return a * 2; },
// )

// console.log(f1(1));

// _go(1,
//   function(a) { return a + 1; },
//   function(a) { return a * 2; },
//   console.log
// )


var _curryrMap = _curryr(_map)
var _curryrFilter = _curryr(_filter)

_go(users,
  _curryrFilter(user => user.age >= 30 ),
  _curryrMap(_get('name')),
  console.log
)



_each(null, console.log)
console.log(_filter(null, function(v){return v}));


console.log(Object.keys([1,2,3,4]));

console.log(_keys(null));

console.clear()


_each({
  13: 'rewoo',
  20: 'fuyu',
  30: 'kami'
}, function(name){
  console.log(name);
})

console.log(_map({
  13: 'rewoo',
  20: 'fuyu',
  30: 'kami'
}, function(name){
  return name.toUpperCase()
}));