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
  pop() {
    if (this.length === 0) return undefined;
    let pre = this.head;
    let temp = this.head;
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
  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = temp.next;
    temp.next = null;
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

  remove(index) {
    if(index === 0) return this.shift()
    if(index === this.length-1) return this.pop()
    if(index < 0 || index >= this.length) return undefined
    /*const temp = this.get(index - 1);
    const curr = this.get(index);
    temp.next = curr.next;
    curr.next = null;*/
    const before = this.get(index-1)
    const temp =  before.next
    before.next = temp.next
    temp.next = null
    this.length--;
    return temp
  }
}

const linkedList = new LinkedList(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
console.log(linkedList);
console.log(linkedList.remove(2));
console.log(linkedList);
