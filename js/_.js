// function _curry(fn) {
//   return function(a) {
//     return function(b) {
//       return fn(a, b)
//     }
//   }
// }

var _get = _curryr(function(obj, key) {
  return obj == null ? undefined : obj[key]
})

var _length = _get('length')


function _curry(fn) {
  return function(a, b) {
    return arguments.length === 2 ? fn(a, b) : function(b) { return fn(a, b) }
  }
}


function _curryr(fn) {
  return function(a, b) {
    return arguments.length === 2 ? fn(a, b) : function(b) { return fn(b, a) }
  }
}


function _each(list, iter) {
  var keys = _keys(list)
  for(var i = 0, len = keys.length; i < len; i++){
    iter(list[keys[i]])
  }
  return list;
}



function _filter(list, predi) {
  var new_list = []; 
  _each(list, function(val){
    if(predi(val)) new_list.push(val)
  })
  return new_list;
}


var _filter = _curryr(_filter)



function _map(list, mapper){
  var new_list = [];
  _each(list, function(val, key) {
    new_list.push( mapper(val, key) )
  })
  return new_list;
}


var _map = _curryr(_map)


var slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1)
}


function _reduce(list, iter, memo) {
  if(arguments.length === 2){
    memo = list[0]
    list = _rest(list)
  }
  _each(list, function(val) {
    memo = iter(memo, val)
  })
  return memo
}


function _pipe(){
  var fns = arguments;
  return function(arg){
    return _reduce(fns, function(arg, fn){
      return fn(arg)
    }, arg)
  }
}


function _go(arg){
  var fns = _rest(arguments)
  return _pipe.apply(null, fns)(arg)
}


function _is_object(obj) {
  return typeof obj === 'object' && !!obj;
}


function _keys(obj) {
  return _is_object(obj) ? Object.keys(obj) : [];
}


function _values(data) {
  return _map(data, _identity)
}


var _values = _map(_identity)


function _identity(val){
  return val;
}


function _pluck(data, key) {
  // return _map(data, function(obj) {
  //   return obj[key]
  // })
  return _map(data, _get(key))
}


function _filter(list, predi) {
  var new_list = []; 
  _each(list, function(val){
    if(predi(val)) new_list.push(val)
  })
  return new_list;
}


function _negate(func) {
  return function(val) {
    return !func(val)
  }
}

function _reject(data, predi) {
  // return _filter(data, function(val) {
  //   return !predi(val)
  // })
  return _filter(data, _negate(predi))
}

var _compact = _filter(_identity)


module.exports = {
  _curry,
  _curryr,
  _each,
  _filter,
  _get,
  _map,
  _reduce,
  _pipe,
  _go,
  _keys,
  _identity,
  _values,
  _pluck,
  _reject,
  _compact,
}