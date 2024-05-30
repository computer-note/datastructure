class FixedArray {
   #array = [];
   #arrayLength = 0;
   #currentLength = 0;

   constructor(length) {
      this.#arrayLength = length;

      for (let i = 0; i < length; ++i) {
         this.#array[i] = undefined;
      }
   }

   push(element) {
      if (this.#currentLength >= this.#arrayLength) {
         throw new Error('배열이 꽉 찼습니다.');
      }

      const insertionPointIdx = this.#currentLength;
      this.#array[insertionPointIdx] = element;

      ++this.#currentLength;
   }

   pop() {
      if (this.#currentLength <= 0) {
         throw new Error('배열이 비었습니다');
      }

      const topElemIdx = this.#currentLength - 1;

      const element = this.#array[topElemIdx];
      this.#array[topElemIdx] = undefined;

      --this.#currentLength;

      return element;
   }

   getLength() {
      return this.#currentLength;
   }

   stringify() {
      let str = '';
      str += '[';
      for (let i = 0; i < this.#currentLength; ++i) {
         str += JSON.stringify(this.#array[i]);
         if (i !== this.#currentLength - 1) {
            str += ', ';
         }
      }
      str += ']';
      return str;
   }

   at(index) {
      return this.#array[index];
   }
}

/* V1 Todo
    constructor() { }

    push(element) { }
      배열 맨 뒤에 요소 추가
      배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.

    pop() { }
      배열의 맨 마지막 요소를 제거하고 그 요소를 반환

    getLength() { }
      현재 배열의 사용되고 있는 크기를 반환

    stringify() { }
      현재 배열의 상태를 string으로 반환
*/

module.exports = FixedArray;
