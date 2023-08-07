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
  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if(index === this.length) return this.push(value)
    if(index < 0 || index > this.length) return false
    const node = new Node(value);
    /*
    const prev = this.get(index - 1);
    const curr = this.get(index);
    prev.next = node;
    node.next = curr;*/
    const temp  =  this.get(index -1)
    node.next = temp.next
    temp.next = node
    this.length++
    return this
  }
}

const linkedList = new LinkedList(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
console.log(linkedList);
linkedList.insert(2,7)
console.log(linkedList)

