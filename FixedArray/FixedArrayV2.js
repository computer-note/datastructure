const FixedArray = require('./FixedArray');

class FixedArrayV2 extends FixedArray {
   constructor(length) {
      super(length);
   }
}

module.exports = FixedArray;
/* V2 Todo
  indexOf(searchElement) { }
    배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 
	 요소가 없으면 -1을 반환합니다.

  find(predicate) { }
    배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소 1개만 반환
    true 가 없으면 null 반환

  findIndex(predicate) { }
    배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소의 index반환
    true 가 없으면 -1 반환

  includes(searchElement) { }
    배열에 특정 요소가 포함되어 있는지 여부를 확인합니다. 
	 (true or false)

  forEach(callback) { }
    배열의 각 요소에 대해 제공된 함수를 한 번씩 실행합니다.

  filter(predicate) { }
    배열의 각 요소에 대해 predicate 결과가 true인 요소를 모아 새로운 배열 반환

  map(callback) { }
    배열의 각 요소에 대해 callback 함수를 호출한 결과를 모아 새로운 배열로 반환

  reduce(callback, initValue) { }
    배열의 각 요소에 대해 제공된 함수를 호출하여 누산기에 값을 축적
*/
