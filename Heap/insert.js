class Heap {
  #heap = []; // private variable;

  getHeap() {
    return [...this.#heap]; // return the copy of the heap instead of the original heap, to avoid access to original heap
  }

  #leftChild(index) {
    return 2 * index + 1;
  }

  #rightChild(index) {
    return 2 * index + 2;
  }

  #parent(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;

    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.#parent(current)]
    ) {
      this.#swap(current, this.#parent(current));
      current = this.#parent(current);
    }
  }
}

const newHeap = new Heap();
newHeap.insert(99);
newHeap.insert(72);
newHeap.insert(61);
newHeap.insert(58);
console.log(newHeap.getHeap());
newHeap.insert(100);
console.log(newHeap.getHeap());
newHeap.insert(78);
console.log(newHeap.getHeap());
