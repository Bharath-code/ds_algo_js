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
 unshift(value){
    const node = new Node(value)
    if(!this.head){
        this.head = node
        this.tail = node
    }else{
        node.next = this.head
        this.head = node
    }
    
    this.length++
    return this
 }
}

const linkedList = new LinkedList(1);
linkedList.unshift(0)
linkedList.unshift(3)
console.log(linkedList)
