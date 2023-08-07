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
  reverse(){
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next =  temp.next
    let prev = null
    for(let i=0; i < this.length;i++){
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next

    }
    return this
  }
}

const linkedList = new LinkedList(1);
console.log(linkedList);
linkedList.push(2);

linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
console.log(linkedList);
linkedList.reverse()
console.log(linkedList)