class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
    constructor(value){
        const node = new Node(value)
        this.head = node
        this.tail = this.head
        this.length = 1
    }
}

const linkedList = new LinkedList(1)
console.log(linkedList)