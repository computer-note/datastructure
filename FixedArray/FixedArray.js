class FixedArray {
   _array = [];
   _arrayLength = 0;
   _currentLength = 0;

   constructor(length) {
      this._arrayLength = length;

      for (let i = 0; i < length; ++i) {
         this._array[i] = undefined;
      }
   }

   push(element) {
      if (this._currentLength >= this._arrayLength) {
         throw new Error('배열이 꽉 찼습니다.');
      }

      const insertionPointIdx = this._currentLength;
      this._array[insertionPointIdx] = element;

      ++this._currentLength;
   }

   pop() {
      if (this._currentLength <= 0) {
         throw new Error('배열이 비었습니다');
      }

      const topElemIdx = this._currentLength - 1;

      const element = this._array[topElemIdx];
      this._array[topElemIdx] = undefined;

      --this._currentLength;

      return element;
   }

   getLength() {
      return this._currentLength;
   }

   stringify() {
      let str = '';
      str += '[';
      for (let i = 0; i < this._currentLength; ++i) {
         str += JSON.stringify(this._array[i]);
         if (i !== this._currentLength - 1) {
            str += ', ';
         }
      }
      str += ']';
      return str;
   }
}

/* V1 Todo
    constructor() { }

    push(element) { }
      배열 맨 뒤에 요소 추가
      배열의 길이가 _arrayLength를 초과할 경우 요소를 추가되면 안됨.

    pop() { }
      배열의 맨 마지막 요소를 제거하고 그 요소를 반환

    getLength() { }
      현재 배열의 사용되고 있는 크기를 반환

    stringify() { }
      현재 배열의 상태를 string으로 반환
*/

module.exports = FixedArray;
