class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
   
    let temp = this.head
    this.head = temp.next
    temp.next = null
    this.length--
     if (this.length === 0) {
       this.tail = null;
     }
    return temp
  }
}

const linkedList = new LinkedList(1);

console.log(linkedList);
console.log(linkedList.shift())
console.log(linkedList)

