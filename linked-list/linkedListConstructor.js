class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head; // or newNode
    this.length = 1; // track the length of the linkedlist
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    // temp will be one step ahead of pre
    // if temp.next is false , then pre node will become tail and we return temp
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null; // make null because temp attach all node in next , to remove completely
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    let temp = this.get(index);
    // why we are using if statement because , get() will return undefined for invalid indexes
    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }
}

const newLinkedList = new LinkedList(9);
console.log(newLinkedList);
newLinkedList.push(2);
console.log(newLinkedList);
newLinkedList.pop();
console.log(newLinkedList);
const popped = newLinkedList.pop();
console.log(newLinkedList);
console.log(popped);
newLinkedList.push(2);
newLinkedList.push(3);
newLinkedList.unshift(1);
console.log(newLinkedList);
console.log(newLinkedList.shift());
console.log(newLinkedList);
newLinkedList.push(5);
newLinkedList.push(6);
newLinkedList.push(7);
console.log(newLinkedList);
console.log(newLinkedList.get(0));
console.log(newLinkedList.set(0, 10));
