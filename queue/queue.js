class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  // this method is similiar to push() method in linked list as BigO is O(1)
  // we are not using array as push and pop has O(1), while shift and unshift is O(n)
  // But linked list has advantage as we push at one end (enqueue) -> O(1)
  // we remove the item from another end shift (dequeue) -> O(1)
  // so Linked list is more efficient in building a queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  // similiar to shift method in linked list
  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}

const myQueue = new Queue(1);
console.log(myQueue);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
