const FixedArray = require('./FixedArray');

class FixedArrayV2 extends FixedArray {
   constructor(length) {
      super(length);
   }

   indexOf(searchElement) {
      const length = this.getLength();
      for (let i = 0; i < length; ++i) {
         if (this.at(i) === searchElement) {
            return i;
         }
      }
      return -1;
   }

   find(predicate) {
      let result = null;

      const length = this.getLength();
      for (let i = 0; i < length; ++i) {
         const element = this.at(i);
         if (predicate(element)) {
            result = element;
            break;
         }
      }

      return result;
   }

   findIndex(predicate) {
      for (let i = 0; i < this.getLength(); ++i) {
         if (predicate(this.at(i))) {
            return i;
         }
      }
      return -1;
   }

   includes(searchElement) {
      const result = this.findIndex(
         element => element === searchElement
      );
      return result === -1 ? false : true;
   }

   includesV2(searchElement) {
      for (let i = 0; i < this.getLength(); ++i) {
         const element = this.at(i);
         if (element === searchElement) {
            return true;
         }
      }
      return false;
   }

   forEach(callback) {
      const length = this.getLength();
      for (let i = 0; i < length; ++i) {
         const element = this.at(i);
         callback(element, i);
      }
   }

   filter(predicate) {
      const filteredArray = [];

      const length = this.getLength();
      for (let i = 0; i < length; ++i) {
         const element = this.at(i);
         if (predicate(element)) {
            filteredArray.push(element);
         }
      }

      return FixedArrayV2.fromJSArray(filteredArray);
   }

   map(callback) {
      const mappedArray = [];

      const length = this.getLength();
      for (let i = 0; i < length; ++i) {
         const element = this.at(i);
         const mappedElement = callback(element, i);
         mappedArray.push(mappedElement);
      }

      return FixedArrayV2.fromJSArray(mappedArray);
   }

   reduce(callback, initValue) {
      let startIndex = 0;

      let accumulator;

      if (initValue !== undefined) {
         accumulator = initValue;
      } else {
         accumulator = this.at(startIndex);
         ++startIndex;
      }

      const length = this.getLength();
      for (let i = startIndex; i < length; ++i) {
         const current = this.at(i);
         accumulator = callback(accumulator, current);
      }

      return accumulator;
   }

   static fromJSArray(jsArray) {
      const fixedArrayV2 = new FixedArrayV2(jsArray.length);
      for (let i = 0; i < jsArray.length; ++i) {
         fixedArrayV2.push(jsArray[i]);
      }
      return fixedArrayV2;
   }
}

module.exports = FixedArrayV2;

/* V2 Todo
  indexOf(searchElement) { }
    배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 
	 요소가 없으면 -1을 반환합니다.

  find(predicate) { }
    배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소 1개만 반환
    true가 없으면 null 반환

  findIndex(predicate) { }
    배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소의 index반환
    true가 없으면 -1 반환

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
