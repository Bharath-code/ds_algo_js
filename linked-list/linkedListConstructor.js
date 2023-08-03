class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head // or newNode
    this.length = 1 // track the length of the linkedlist
  }
  push(value){
    const newNode = new Node(value)
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }else{
        this.tail.next = newNode
        this.tail = newNode
    }
    
    this.length++
    return this
  }
}

const newLinkedList = new LinkedList(9)
console.log(newLinkedList);
newLinkedList.push(2)
console.log(newLinkedList);
