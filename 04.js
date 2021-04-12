const _ = require('./js/partial');

// 지연 평가를 시작 시키고 유지 시키는(이어 가는) 함수
  // map
  // filter, reject
  var mi = 0
  var fi = 0
  _.go(
    _.range(100),
    L.map(val => {
      ++mi;
      return val * val;
    }),
    L.filter(function(val) {
      ++fi;
      return val % 2;
    }),
    L.take(5),
    console.log
  )

  console.log(mi, fi);
//끝을 내는 함수
  // take
  // some, every, find
