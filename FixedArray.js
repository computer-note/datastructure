class FixedArray {
   #array = [];
   #arrayLength = 0;
   #currentIndex = 0;

   constructor(size) {
      if (size < 0) {
         throw new Error('배열 길이는 0이상 이어야 합니다.');
      }

      this.#arrayLength = size;
      for (let i = 0; i < this.#arrayLength; ++i) {
         this.#array[i] = undefined;
      }
   }

   push(item) {
      if (this.#currentIndex + 1 >= this.#arrayLength) {
         throw new Error('배열이 꽉 찼습니다.');
      }
   }

   pop() {
      if (this.#currentIndex <= 0) {
         throw new Error('배열이 비었습니다.');
      }
   }

   arrayLength() {
      return this.#currentIndex + 1;
   }

   stringify() {
      let string = '';
      string += '[';
      for (let i = 0; i <= this.#currentIndex; ++i) {
         string += this.#array[i];
         if (i !== this.#currentIndex) {
            string += ', ';
         }
      }
      string += ']';

      return string;
   }
}

/*
프로퍼티: #array, #arrayLength
  #array 초기값: undefined
메서드: push, pop, getLength, stringify
*/

module.exports = FixedArray;
