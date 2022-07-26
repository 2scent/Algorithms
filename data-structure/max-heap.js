class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let curIndex = this.heap.length - 1;
    let parentIndex = Math.floor(curIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[curIndex] = temp;

      curIndex = parentIndex;
      parentIndex = Math.floor(curIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let curIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[curIndex] < this.heap[leftIndex] ||
      this.heap[curIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[curIndex];
        this.heap[curIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        curIndex = rightIndex;
      } else {
        const temp = this.heap[curIndex];
        this.heap[curIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        curIndex = leftIndex;
      }
      leftIndex = curIndex * 2;
      rightIndex = curIndex * 2 + 1;
    }

    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); // [ null, 63, 54, 45, 27, 36 ]

const array = [];
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
console.log(array); // [ 63, 54, 45, 36, 27 ]
